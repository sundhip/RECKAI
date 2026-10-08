import { z } from "zod";

const serverEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().url().optional(),
  AUTH_SECRET: z.string().min(16).optional(),
  EMAIL_SERVICE_KEY: z.string().optional(),
  INQUIRY_NOTIFICATION_EMAIL: z.string().email().optional(),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().positive().default(10),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().positive().default(60000),
});

const clientEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_ANALYTICS_ID: z.string().optional(),
});

/**
 * Validates environment variables and provides structured access.
 */
export function validateEnv() {
  const serverParsed = serverEnvSchema.safeParse(process.env);
  const clientParsed = clientEnvSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  });

  if (!clientParsed.success) {
    console.error(
      "❌ Invalid client environment variables:",
      clientParsed.error.flatten().fieldErrors
    );
    throw new Error("Invalid client environment variables");
  }

  if (!serverParsed.success && process.env.NODE_ENV === "production") {
    console.warn(
      "⚠️ Note on server environment configuration in production:",
      serverParsed.error.flatten().fieldErrors
    );
  }

  return {
    server: serverParsed.data || {
      NODE_ENV: "development",
      RATE_LIMIT_MAX_REQUESTS: 10,
      RATE_LIMIT_WINDOW_MS: 60000,
    },
    client: clientParsed.data,
  };
}

export const env = validateEnv();
