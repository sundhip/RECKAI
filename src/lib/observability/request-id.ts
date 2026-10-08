import crypto from "crypto";

export const X_REQUEST_ID_HEADER = "x-request-id";

/**
 * Extracts an existing x-request-id header or generates a cryptographically
 * random, collision-resistant correlation token.
 */
export function getOrCreateRequestId(headers?: Headers | null): string {
  if (headers) {
    const existing = headers.get(X_REQUEST_ID_HEADER);
    if (existing && existing.length < 128 && /^[a-zA-Z0-9_\-\.]+$/.test(existing)) {
      return existing;
    }
  }

  const randomBytes = crypto.randomBytes(8).toString("hex");
  return `req_${Date.now().toString(36)}_${randomBytes}`;
}
