import crypto from "crypto";

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

// In-memory cache for sliding window rate limiting
const ipRateLimitMap = new Map<string, RateLimitRecord>();

const WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS) || 60 * 1000; // 1 minute
const MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 10; // 10 requests per minute

/**
 * Anonymously hash an IP address using SHA-256 for GDPR / privacy compliance.
 */
export function hashIp(ip: string): string {
  const salt = process.env.AUTH_SECRET || "reckai-salt";
  return crypto.createHash("sha256").update(`${ip}-${salt}`).digest("hex");
}

/**
 * Validates whether the incoming IP hash is within allowed rate limits.
 */
export function checkRateLimit(ipIdentifier: string): {
  success: boolean;
  remaining: number;
  resetInSeconds: number;
} {
  const now = Date.now();
  const record = ipRateLimitMap.get(ipIdentifier);

  // Periodic cleanup if map grows large
  if (ipRateLimitMap.size > 10000) {
    ipRateLimitMap.forEach((value, key) => {
      if (value.resetAt < now) {
        ipRateLimitMap.delete(key);
      }
    });
  }

  if (!record || record.resetAt < now) {
    ipRateLimitMap.set(ipIdentifier, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return {
      success: true,
      remaining: MAX_REQUESTS - 1,
      resetInSeconds: Math.ceil(WINDOW_MS / 1000),
    };
  }

  if (record.count >= MAX_REQUESTS) {
    return {
      success: false,
      remaining: 0,
      resetInSeconds: Math.max(1, Math.ceil((record.resetAt - now) / 1000)),
    };
  }

  record.count += 1;
  return {
    success: true,
    remaining: MAX_REQUESTS - record.count,
    resetInSeconds: Math.ceil((record.resetAt - now) / 1000),
  };
}
