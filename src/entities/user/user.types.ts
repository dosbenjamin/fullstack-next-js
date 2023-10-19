import type { users } from './user.schema'

export type User = typeof users.$inferSelect;
