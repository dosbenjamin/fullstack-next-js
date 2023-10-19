import { usersRouter } from '@entities/user/server';
import { apiContract } from '.';
import { createNextRoute } from '@ts-rest/next';

export const apiRouter = createNextRoute(apiContract, {
  users: usersRouter,
});
