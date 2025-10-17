import type { Meta } from "@storybook/react";

import type { DisclosureProps } from "../../components/aria/Disclosure";
import { Disclosure } from "../../components/aria/Disclosure";

const meta: Meta<typeof Disclosure> = {
  component: Disclosure,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: DisclosureProps) => <Disclosure {...args}>Details on managing your account</Disclosure>;

Example.args = {
  title: "Manage your account",
};
