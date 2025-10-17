import type { Meta } from "@storybook/react";

import type { TextFieldProps } from "../../components/aria/TextField";
import { TextField } from "../../components/aria/TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: TextFieldProps) => <TextField {...args} />;

Example.args = {
  label: "Name",
};
