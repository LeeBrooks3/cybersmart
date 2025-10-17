import type { Meta } from "@storybook/react";
import type { DateValue } from "react-aria-components";

import type { DatePickerProps } from "../../components/aria/DatePicker";
import { DatePicker } from "../../components/aria/DatePicker";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: DatePickerProps<DateValue>) => <DatePicker {...args} />;

Example.args = {
  label: "Event date",
};
