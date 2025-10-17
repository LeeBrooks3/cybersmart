import type { Meta } from "@storybook/react";

import type { TableProps } from "../../components/aria/Table";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "../../components/aria/Table";

const meta: Meta<typeof Table> = {
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: TableProps) => (
  <Table aria-label="Files" {...args}>
    <TableHeader>
      <TableColumn isRowHeader>Name</TableColumn>
      <TableColumn>Type</TableColumn>
      <TableColumn>Date Modified</TableColumn>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Games</TableCell>
        <TableCell>File folder</TableCell>
        <TableCell>6/7/2020</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Program Files</TableCell>
        <TableCell>File folder</TableCell>
        <TableCell>4/7/2021</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>bootmgr</TableCell>
        <TableCell>System file</TableCell>
        <TableCell>11/20/2010</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

Example.args = {
  onRowAction: null,
  selectionMode: "multiple",
};
