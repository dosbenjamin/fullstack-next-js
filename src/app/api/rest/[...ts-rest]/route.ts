import { apiContract } from '@shared/api'
import { apiRouter } from '@shared/api/server'
import { createNextRouter } from '@ts-rest/next';

const router = createNextRouter(apiContract, apiRouter);

export { router as GET, router as POST, router as PUT, router as DELETE };
