import type { Meta } from "@storybook/react";
import type { DateValue } from "react-aria-components";

import type { RangeCalendarProps } from "../../components/aria/RangeCalendar";
import { RangeCalendar } from "../../components/aria/RangeCalendar";

const meta: Meta<typeof RangeCalendar> = {
  component: RangeCalendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: RangeCalendarProps<DateValue>) => <RangeCalendar aria-label="Trip dates" {...args} />;
