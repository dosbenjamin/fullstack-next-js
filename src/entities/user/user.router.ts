import { usersContract } from './user.contract';
import { users } from './user.schema';
import { db } from '@shared/db'
import { createNextRoute } from '@ts-rest/next';

export const usersRouter = createNextRoute(usersContract, {
  create: async ({ body }) => {
    const [user] = await db.insert(users).values({
      id: body.id,
      name: body.name,
    }).returning();

    return {
      status: 200,
      body: {
        id: user.id,
        name: user.name,
      },
    }
  }
});
