import { apiContract } from '.';
import { initQueryClient } from '@ts-rest/react-query';

export const apiClient = initQueryClient(apiContract, {
  baseUrl: '/api',
  baseHeaders: {},
});
