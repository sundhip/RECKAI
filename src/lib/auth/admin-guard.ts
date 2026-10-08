/**
 * Centralized Admin Authorization Guard
 * Re-exports Clerk server-side authorization contracts.
 */
export {
  requireAdminAuth,
  hasRole,
  resolveClerkRole,
  ROLE_HIERARCHY,
  type AuthResult,
} from "./clerk-auth";
