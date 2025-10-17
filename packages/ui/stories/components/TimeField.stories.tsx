import type { Meta } from "@storybook/react";
import type { TimeValue } from "react-aria-components";

import type { TimeFieldProps } from "../../components/aria/TimeField";
import { TimeField } from "../../components/aria/TimeField";

const meta: Meta<typeof TimeField> = {
  component: TimeField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: TimeFieldProps<TimeValue>) => <TimeField {...args} />;

Example.args = {
  label: "Event time",
};
