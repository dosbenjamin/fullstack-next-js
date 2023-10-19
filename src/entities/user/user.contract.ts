import { insertUserSchema, selectUserSchema } from './user.schema';
import { initContract } from '@ts-rest/core';

const contract = initContract();

export const usersContract = contract.router({
  create: {
    method: 'POST',
    path: '/users',
    body: insertUserSchema,
    responses: {
      200: selectUserSchema,
    }
  }
});
