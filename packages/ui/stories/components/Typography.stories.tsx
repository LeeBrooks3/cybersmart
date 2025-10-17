import type { Meta } from "@storybook/react";

import type {
  Heading1Props,
  Heading2Props,
  Heading3Props,
  Heading4Props,
  Heading5Props,
  Heading6Props,
  ParagraphProps,
} from "../../components/Typography";
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Paragraph } from "../../components/Typography";

const meta: Meta = {
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const ParagraphExample = (args: ParagraphProps) => (
  <Paragraph {...args}>The quick brown fox jumps over the lazy dog.</Paragraph>
);

export const Heading1Example = (args: Heading1Props) => (
  <Heading1 {...args}>The quick brown fox jumps over the lazy dog.</Heading1>
);

export const Heading2Example = (args: Heading2Props) => (
  <Heading2 {...args}>The quick brown fox jumps over the lazy dog.</Heading2>
);

export const Heading3Example = (args: Heading3Props) => (
  <Heading3 {...args}>The quick brown fox jumps over the lazy dog.</Heading3>
);

export const Heading4Example = (args: Heading4Props) => (
  <Heading4 {...args}>The quick brown fox jumps over the lazy dog.</Heading4>
);

export const Heading5Example = (args: Heading5Props) => (
  <Heading5 {...args}>The quick brown fox jumps over the lazy dog.</Heading5>
);

export const Heading6Example = (args: Heading6Props) => (
  <Heading6 {...args}>The quick brown fox jumps over the lazy dog.</Heading6>
);
