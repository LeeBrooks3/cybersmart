import type { Meta } from "@storybook/react";

import type { CheckboxProps } from "../../components/aria/Checkbox";
import { Checkbox } from "../../components/aria/Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: CheckboxProps) => <Checkbox {...args}>Unsubscribe</Checkbox>;
