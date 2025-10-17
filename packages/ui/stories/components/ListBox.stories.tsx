import type { Meta } from "@storybook/react";

import { Header } from "../../components/aria/Header";
import type { ListBoxProps } from "../../components/aria/ListBox";
import { ListBoxSection } from "../../components/aria/ListBox";
import { ListBox, ListBoxItem } from "../../components/aria/ListBox";
import { Heading5 } from "../../components/Typography";

const meta: Meta<typeof ListBox> = {
  component: ListBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: ListBoxProps<object>) => (
  <ListBox aria-label="Ice cream flavor" {...args}>
    <ListBoxSection>
      <Header>
        <Heading5>Neopolitan</Heading5>
      </Header>
      <ListBoxItem>Chocolate</ListBoxItem>
      <ListBoxItem>Vanilla</ListBoxItem>
      <ListBoxItem>Strawberry</ListBoxItem>
    </ListBoxSection>
    <ListBoxItem>Mint</ListBoxItem>
  </ListBox>
);

Example.args = {
  onAction: null,
  selectionMode: "single",
};
