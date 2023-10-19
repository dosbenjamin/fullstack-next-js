import { usersContract } from '@entities/user';
import { initContract } from '@ts-rest/core';

const contract = initContract();

export const apiContract = contract.router({
  users: usersContract,
});
