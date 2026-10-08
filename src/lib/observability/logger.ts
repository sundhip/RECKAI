export type LogLevel = "INFO" | "WARN" | "ERROR" | "SECURITY" | "PERFORMANCE";

export interface LogContext {
  requestId?: string;
  route?: string;
  method?: string;
  status?: number;
  durationMs?: number;
  environment?: string;
  [key: string]: unknown;
}

const SENSITIVE_KEY_PATTERNS = [
  /password/i,
  /secret/i,
  /token/i,
  /authorization/i,
  /cookie/i,
  /session/i,
  /api[-_]?key/i,
  /credential/i,
  /private/i,
  /notes/i,
  /problem/i,
  /description/i,
];

/**
 * Recursively scrubs sensitive data from log metadata to prevent secret or PII leakage.
 */
export function scrubSensitiveData<T>(val: T): T {
  if (val === null || val === undefined) return val;

  if (typeof val === "string") {
    // If string resembles JWT or bearer token, mask it
    if (val.startsWith("ey") && val.split(".").length === 3) {
      return "[MASKED_JWT]" as unknown as T;
    }
    return val;
  }

  if (Array.isArray(val)) {
    return val.map((item) => scrubSensitiveData(item)) as unknown as T;
  }

  if (typeof val === "object") {
    const cleaned: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
      const isSensitiveKey = SENSITIVE_KEY_PATTERNS.some((pat) => pat.test(k));
      if (isSensitiveKey) {
        cleaned[k] = "[REDACTED]";
      } else {
        cleaned[k] = scrubSensitiveData(v);
      }
    }
    return cleaned as T;
  }

  return val;
}

class Logger {
  private format(
    level: LogLevel,
    message: string,
    context?: LogContext,
    meta?: Record<string, unknown>
  ) {
    const entry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      environment: process.env.NODE_ENV || "development",
      ...(context?.requestId ? { requestId: context.requestId } : {}),
      ...(context?.route ? { route: context.route } : {}),
      ...(context?.method ? { method: context.method } : {}),
      ...(context?.status ? { status: context.status } : {}),
      ...(context?.durationMs !== undefined ? { durationMs: context.durationMs } : {}),
      ...(meta ? { meta: scrubSensitiveData(meta) } : {}),
    };

    const serialized = JSON.stringify(entry);

    if (level === "ERROR" || level === "SECURITY") {
      console.error(serialized);
    } else if (level === "WARN") {
      console.warn(serialized);
    } else {
      console.log(serialized);
    }

    return entry;
  }

  info(message: string, context?: LogContext, meta?: Record<string, unknown>) {
    return this.format("INFO", message, context, meta);
  }

  warn(message: string, context?: LogContext, meta?: Record<string, unknown>) {
    return this.format("WARN", message, context, meta);
  }

  error(message: string, context?: LogContext, meta?: Record<string, unknown>) {
    return this.format("ERROR", message, context, meta);
  }

  security(message: string, context?: LogContext, meta?: Record<string, unknown>) {
    return this.format("SECURITY", message, context, meta);
  }

  performance(message: string, context?: LogContext, meta?: Record<string, unknown>) {
    return this.format("PERFORMANCE", message, context, meta);
  }
}

export const logger = new Logger();
