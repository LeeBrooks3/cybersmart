import type { Meta } from "@storybook/react";

import { Button } from "../../components/aria/Button";
import type { TooltipProps } from "../../components/aria/Tooltip";
import { Tooltip, TooltipTrigger } from "../../components/aria/Tooltip";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: TooltipProps) => (
  <TooltipTrigger>
    <Button>💾</Button>
    <Tooltip {...args}>Save</Tooltip>
  </TooltipTrigger>
);
