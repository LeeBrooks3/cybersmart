import type { Meta } from "@storybook/react";
import type { DateValue } from "react-aria-components";

import type { DateFieldProps } from "../../components/aria/DateField";
import { DateField } from "../../components/aria/DateField";

const meta: Meta<typeof DateField> = {
  component: DateField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: DateFieldProps<DateValue>) => <DateField {...args} />;

Example.args = {
  label: "Event date",
};
