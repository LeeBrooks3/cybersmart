import type { Meta } from "@storybook/react";
import type { ToggleButtonGroupProps } from "react-aria-components";

import { ToggleButton } from "../../components/aria/ToggleButton";
import { ToggleButtonGroup } from "../../components/aria/ToggleButtonGroup";

const meta: Meta<typeof ToggleButtonGroup> = {
  component: ToggleButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: ToggleButtonGroupProps) => (
  <ToggleButtonGroup {...args}>
    <ToggleButton id="left">Left</ToggleButton>
    <ToggleButton id="center">Center</ToggleButton>
    <ToggleButton id="right">Right</ToggleButton>
  </ToggleButtonGroup>
);
