import type { Meta } from "@storybook/react";

import { Button } from "../../components/aria/Button";
import type { FormProps } from "../../components/aria/Form";
import { Form } from "../../components/aria/Form";
import { TextField } from "../../components/aria/TextField";

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: FormProps) => (
  <Form {...args}>
    <TextField name="email" type="email" isRequired label="Email" />
    <Button type="submit">Submit</Button>
  </Form>
);
