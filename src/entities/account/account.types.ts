import { accounts } from './account.schema'

export type Account = typeof accounts.$inferSelect;
