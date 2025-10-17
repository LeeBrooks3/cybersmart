import type { Meta } from "@storybook/react";

import type { ComboBoxProps } from "../../components/aria/ComboBox";
import { ComboBox, ComboBoxItem } from "../../components/aria/ComboBox";

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: ComboBoxProps<object>) => (
  <ComboBox {...args}>
    <ComboBoxItem>Chocolate</ComboBoxItem>
    <ComboBoxItem>Mint</ComboBoxItem>
    <ComboBoxItem>Strawberry</ComboBoxItem>
    <ComboBoxItem>Vanilla</ComboBoxItem>
  </ComboBox>
);

Example.args = {
  label: "Ice cream flavor",
};
