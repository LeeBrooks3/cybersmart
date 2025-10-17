import type { Meta } from "@storybook/react";

import { Button } from "../../components/aria/Button";
import { DialogTrigger } from "../../components/aria/Dialog";
import { Heading } from "../../components/aria/Heading";
import type { PopoverProps } from "../../components/aria/Popover";
import { Popover } from "../../components/aria/Popover";

const meta: Meta<typeof Popover> = {
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: PopoverProps) => (
  <DialogTrigger>
    <Button aria-label="Help">ⓘ</Button>
    <Popover {...args}>
      <Heading slot="title">Help</Heading>
      <p>For help accessing your account, please contact support.</p>
    </Popover>
  </DialogTrigger>
);
