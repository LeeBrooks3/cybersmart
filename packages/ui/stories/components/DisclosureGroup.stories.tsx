import type { Meta } from "@storybook/react";

import { Disclosure } from "../../components/aria/Disclosure";
import type { DisclosureGroupProps } from "../../components/aria/DisclosureGroup";
import { DisclosureGroup } from "../../components/aria/DisclosureGroup";

const meta: Meta<typeof DisclosureGroup> = {
  component: DisclosureGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: DisclosureGroupProps) => (
  <DisclosureGroup {...args}>
    <Disclosure id="personal" title="Personal Information">
      <p>Personal information form here.</p>
    </Disclosure>
    <Disclosure id="billing" title={"Billing Address"}>
      <p>Billing address form here.</p>
    </Disclosure>
  </DisclosureGroup>
);

Example.args = {
  defaultExpandedKeys: ["personal"],
};
