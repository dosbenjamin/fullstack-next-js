import { sessions } from './session.schema';

export type Session = typeof sessions.$inferSelect;
