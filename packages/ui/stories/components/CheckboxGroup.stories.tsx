import type { Meta } from "@storybook/react";

import { Checkbox } from "../../components/aria/Checkbox";
import type { CheckboxGroupProps } from "../../components/aria/CheckboxGroup";
import { CheckboxGroup } from "../../components/aria/CheckboxGroup";

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: CheckboxGroupProps) => (
  <CheckboxGroup {...args}>
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
);

Example.args = {
  label: "Favorite sports",
};
