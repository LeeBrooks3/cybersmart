import type { Meta } from "@storybook/react";

import { Header } from "../../components/aria/Header";
import type { MenuButtonProps } from "../../components/aria/Menu";
import { MenuSection } from "../../components/aria/Menu";
import { Menu, MenuButton, MenuItem } from "../../components/aria/Menu";
import { Heading6 } from "../../components/Typography";

const meta: Meta<typeof Menu> = {
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: MenuButtonProps<object>) => (
  <MenuButton label="Edit" {...args}>
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Paste</MenuItem>
    <MenuSection>
      <Header>
        <Heading6>Sub-menu</Heading6>
      </Header>
      <MenuItem>Hello</MenuItem>
      <MenuItem>World</MenuItem>
    </MenuSection>
  </MenuButton>
);
