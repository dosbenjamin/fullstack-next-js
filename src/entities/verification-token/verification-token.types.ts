import type { verificationTokens } from './verification-token.schema';

export type VerificationToken = typeof verificationTokens.$inferSelect;
