import type { Meta } from "@storybook/react";

import type { BreadcrumbsProps } from "../../components/aria/Breadcrumbs";
import { Breadcrumb, BreadcrumbLink, Breadcrumbs } from "../../components/aria/Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: BreadcrumbsProps<object>) => (
  <Breadcrumbs {...args}>
    <Breadcrumb>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbLink href="/react-aria/">React Aria</BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbLink>Breadcrumbs</BreadcrumbLink>
    </Breadcrumb>
  </Breadcrumbs>
);
