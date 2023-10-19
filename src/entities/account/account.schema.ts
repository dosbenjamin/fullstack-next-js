import { users } from '@entities/user/server'
import { integer, pgTable, primaryKey, text, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import type { AdapterAccount } from "next-auth/adapters";

export const accounts = pgTable(
  "account",
  {
    userId: uuid("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state")
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId)
  })
);

export const selectAccountSchema = createSelectSchema(accounts);
export const insertAccountSchema = createInsertSchema(accounts);
