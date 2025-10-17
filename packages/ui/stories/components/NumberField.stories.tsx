import type { Meta } from "@storybook/react";

import type { NumberFieldProps } from "../../components/aria/NumberField";
import { NumberField } from "../../components/aria/NumberField";

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: NumberFieldProps) => <NumberField {...args} />;

Example.args = {
  label: "Cookies",
};
