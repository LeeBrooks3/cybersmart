import type { Meta } from "@storybook/react";

import type { SearchFieldProps } from "../../components/aria/SearchField";
import { SearchField } from "../../components/aria/SearchField";

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: SearchFieldProps) => <SearchField {...args} />;

Example.args = {
  label: "Search",
};
