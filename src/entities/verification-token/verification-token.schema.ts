import { pgTable, primaryKey, text, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull()
  },
  (verificationToken) => ({
    compoundKey: primaryKey(verificationToken.identifier, verificationToken.token)
  })
)

export const selectVerificationTokenSchema = createSelectSchema(verificationTokens);
export const insertVerificationTokenSchema = createInsertSchema(verificationTokens);
