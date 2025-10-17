import type { Meta } from "@storybook/react";

import type { SliderProps } from "../../components/aria/Slider";
import { Slider } from "../../components/aria/Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: SliderProps<number>) => <Slider {...args} />;

Example.args = {
  label: "Range",
  defaultValue: [30, 60],
  thumbLabels: ["start", "end"],
};
