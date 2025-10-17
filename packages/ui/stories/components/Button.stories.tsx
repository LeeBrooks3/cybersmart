import type { Meta } from "@storybook/react";

import type { ButtonProps } from "../../components/aria/Button";
import { Button } from "../../components/aria/Button";
import { Section } from "../../components/layout/Section";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: ButtonProps) => (
  <Section>
    <Button {...args}>Press me</Button>
  </Section>
);

Example.args = {
  // onPress: () => alert("Hello world!"),
};
