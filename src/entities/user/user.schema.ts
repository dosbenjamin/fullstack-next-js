import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const users = pgTable("user", {
  id: uuid("id").notNull().primaryKey(),
  name: text("name"),
  // email: text('email').notNull()
});

export const selectUserSchema = createSelectSchema(users);
export const insertUserSchema = createInsertSchema(users);
