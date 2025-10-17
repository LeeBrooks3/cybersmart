import type { Meta } from "@storybook/react";
import type { DateValue } from "react-aria-components";

import type { DateRangePickerProps } from "../../components/aria/DateRangePicker";
import { DateRangePicker } from "../../components/aria/DateRangePicker";

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: DateRangePickerProps<DateValue>) => <DateRangePicker {...args} />;

Example.args = {
  label: "Event date",
};
