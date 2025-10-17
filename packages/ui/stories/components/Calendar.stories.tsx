import type { Meta } from "@storybook/react";
import type { DateValue } from "react-aria-components";

import type { CalendarProps } from "../../components/aria/Calendar";
import { Calendar } from "../../components/aria/Calendar";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: CalendarProps<DateValue>) => <Calendar aria-label="Event date" {...args} />;
