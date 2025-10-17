import type { Meta } from "@storybook/react";

import { Radio } from "../../components/aria/Radio";
import type { RadioGroupProps } from "../../components/aria/RadioGroup";
import { RadioGroup } from "../../components/aria/RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: RadioGroupProps) => (
  <RadioGroup {...args}>
    <Radio value="soccer">Soccer</Radio>
    <Radio value="baseball">Baseball</Radio>
    <Radio value="basketball">Basketball</Radio>
  </RadioGroup>
);

Example.args = {
  label: "Favorite sport",
};
