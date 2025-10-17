import { RouterProvider } from "@leebrooks3/ui/components/RouterProvider";
import { ThemeProvider } from "@leebrooks3/ui/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Outlet, Scripts, useNavigate } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { ReactNode } from "react";

import { Layout } from "~/components/Layout";

const queryClient = new QueryClient();

export function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

export function RootDocument({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <RouterProvider navigate={(path) => navigate({ to: path })}>
            <ThemeProvider>
              <Layout>{children}</Layout>
            </ThemeProvider>
          </RouterProvider>
        </QueryClientProvider>

        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
