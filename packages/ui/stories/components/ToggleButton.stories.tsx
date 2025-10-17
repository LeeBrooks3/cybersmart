import type { Meta } from "@storybook/react";

import type { ToggleButtonProps } from "../../components/aria/ToggleButton";
import { ToggleButton } from "../../components/aria/ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: ToggleButtonProps) => <ToggleButton {...args}>Pin</ToggleButton>;
