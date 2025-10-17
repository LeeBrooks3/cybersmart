import type { ReactNode } from "react";
import { RouterProvider as AriaRouterProvider } from "react-aria-components";

export interface RouterProviderProps {
  navigate: (path: string) => void;
  useHref?: (href: string) => string;
  children: ReactNode;
}

export const RouterProvider = ({ ...props }: RouterProviderProps) => {
  return <AriaRouterProvider {...props} />;
};
