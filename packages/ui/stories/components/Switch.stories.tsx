import type { Meta } from "@storybook/react";

import type { SwitchProps } from "../../components/aria/Switch";
import { Switch } from "../../components/aria/Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: SwitchProps) => <Switch {...args}>Wi-Fi</Switch>;
