import type { PropsWithChildren } from 'react'
import { QueryClientProvider } from './providers/query-client-provider'

type RootLayoutProps = PropsWithChildren<{}>;

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body>
      <QueryClientProvider>
        {children}
      </QueryClientProvider>
    </body>
  </html>
);

export default RootLayout;
