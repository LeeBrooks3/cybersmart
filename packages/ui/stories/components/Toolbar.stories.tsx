import type { Meta } from "@storybook/react";

import { Button } from "../../components/aria/Button";
import { Checkbox } from "../../components/aria/Checkbox";
import { Group } from "../../components/aria/Group";
import { Separator } from "../../components/aria/Separator";
import { ToggleButton } from "../../components/aria/ToggleButton";
import type { ToolbarProps } from "../../components/aria/Toolbar";
import { Toolbar } from "../../components/aria/Toolbar";

const meta: Meta<typeof Toolbar> = {
  component: Toolbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: ToolbarProps) => (
  <Toolbar aria-label="Text formatting" {...args}>
    <Group aria-label="Style">
      <ToggleButton aria-label="Bold">
        <b>B</b>
      </ToggleButton>
      <ToggleButton aria-label="Italic">
        <i>I</i>
      </ToggleButton>
      <ToggleButton aria-label="Underline">
        <u>U</u>
      </ToggleButton>
    </Group>
    <Separator orientation="vertical" />
    <Group aria-label="Clipboard">
      <Button>Copy</Button>
      <Button>Paste</Button>
      <Button>Cut</Button>
    </Group>
    <Separator orientation="vertical" />
    <Checkbox>Night Mode</Checkbox>
  </Toolbar>
);
