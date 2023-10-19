import NextAuth from 'next-auth/next';
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from '@shared/db'

export default NextAuth({
  adapter: DrizzleAdapter(db),
  providers: []
})
