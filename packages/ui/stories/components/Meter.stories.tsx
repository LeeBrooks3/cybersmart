import type { Meta } from "@storybook/react";

import type { MeterProps } from "../../components/aria/Meter";
import { Meter } from "../../components/aria/Meter";

const meta: Meta<typeof Meter> = {
  component: Meter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: MeterProps) => <Meter {...args} />;

Example.args = {
  label: "Storage space",
  value: 80,
};
