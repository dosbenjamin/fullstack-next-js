import { accounts } from '@entities/account'
import { sessions } from '@entities/session'
import { users } from '@entities/user/server'
import { verificationTokens } from '@entities/verification-token'
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres("postgres://");

export const db = drizzle(queryClient, {
  schema: {
    accounts,
    sessions,
    users,
    verificationTokens
  }
});
