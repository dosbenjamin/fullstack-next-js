'use client';

import type { PropsWithChildren } from 'react'
import { QueryClientProvider as Provider, QueryClient } from 'react-query';

type QueryClientProviderProps = PropsWithChildren<{}>

const queryClient = new QueryClient();

export const QueryClientProvider = (props: QueryClientProviderProps) => (
  <Provider {...props} client={queryClient} />
);
