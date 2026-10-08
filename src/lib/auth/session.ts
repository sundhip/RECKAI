import crypto from "node:crypto";
import { AdminRole, AdminSession } from "@/types/admin";

const SESSION_COOKIE_NAME = "reckai_admin_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 24; // 24 hours

function getSecretKey(): string {
  return process.env.AUTH_SECRET || "reckai-default-secure-dev-session-secret-key-32b";
}

/**
 * Creates a signed JWT-like HMAC token: payload.signature
 */
export function signSessionToken(session: Omit<AdminSession, "exp">): string {
  const exp = Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS;
  const payload: AdminSession = { ...session, exp };
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");

  const secret = getSecretKey();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payloadB64)
    .digest("base64url");

  return `${payloadB64}.${signature}`;
}

/**
 * Verifies and decodes a session token. Returns null if invalid or expired.
 */
export function verifySessionToken(token?: string | null): AdminSession | null {
  if (!token || !token.includes(".")) return null;

  try {
    const [payloadB64, signature] = token.split(".");
    if (!payloadB64 || !signature) return null;

    const secret = getSecretKey();
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(payloadB64)
      .digest("base64url");

    if (signature !== expectedSignature) {
      return null;
    }

    const jsonStr = Buffer.from(payloadB64, "base64url").toString("utf-8");
    const session: AdminSession = JSON.parse(jsonStr);

    const now = Math.floor(Date.now() / 1000);
    if (session.exp < now) {
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

/**
 * Checks whether a user role meets or exceeds the required role.
 */
export function hasRole(userRole: AdminRole, requiredRole: AdminRole): boolean {
  const roleWeights: Record<AdminRole, number> = {
    ADMIN: 3,
    EDITOR: 2,
    VIEWER: 1,
  };
  return roleWeights[userRole] >= roleWeights[requiredRole];
}

export { SESSION_COOKIE_NAME, SESSION_DURATION_SECONDS };
