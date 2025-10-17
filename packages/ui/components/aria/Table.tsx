/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type {
  CellProps as AriaCellProps,
  ColumnProps as AriaColumnProps,
  RowProps as AriaRowProps,
  TableBodyProps as AriaTableBodyProps,
  TableHeaderProps as AriaTableHeaderProps,
  TableProps as AriaTableProps,
} from "react-aria-components";
import {
  Cell as AriaCell,
  Collection,
  Column as AriaColumn,
  Row as AriaRow,
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableHeader,
  useTableOptions,
} from "react-aria-components";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

export interface TableProps extends AriaTableProps {
  //
}

export function Table(props: TableProps) {
  return <AriaTable css={styles.table} {...props} />;
}

export interface TableColumnProps extends AriaColumnProps {
  //
}

export function TableColumn(props: TableColumnProps) {
  return (
    <AriaColumn css={styles.column} {...props}>
      {({ allowsSorting, sortDirection }) => (
        <>
          {props.children}
          {allowsSorting && (
            <span aria-hidden="true" className="sort-indicator">
              {sortDirection === "ascending" ? "▲" : "▼"}
            </span>
          )}
        </>
      )}
    </AriaColumn>
  );
}

interface TableHeaderProps<T extends object> extends AriaTableHeaderProps<T> {
  //
}

export function TableHeader<T extends object>({ columns, children }: TableHeaderProps<T>) {
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();

  return (
    <AriaTableHeader css={styles.header}>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <AriaColumn />}
      {selectionBehavior === "toggle" && (
        <TableColumn>{selectionMode === "multiple" && <Checkbox slot="selection" />}</TableColumn>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaTableHeader>
  );
}

interface TableBodyProps<T extends object> extends AriaTableBodyProps<T> {
  //
}

export function TableBody<T extends object>(props: TableBodyProps<T>) {
  return <AriaTableBody css={styles.body} {...props} />;
}

export interface TableRowProps<T extends object> extends AriaRowProps<T> {
  //
}

export function TableRow<T extends object>({ id, columns, children, ...otherProps }: TableRowProps<T>) {
  const { selectionBehavior, allowsDragging } = useTableOptions();

  return (
    <AriaRow css={styles.row} id={id} {...otherProps}>
      {allowsDragging && (
        <TableCell>
          <Button slot="drag">≡</Button>
        </TableCell>
      )}
      {selectionBehavior === "toggle" && (
        <TableCell>
          <Checkbox slot="selection" />
        </TableCell>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaRow>
  );
}

export interface TableCellProps extends AriaCellProps {
  //
}

export function TableCell(props: TableCellProps) {
  return <AriaCell css={styles.cell} {...props} />;
}

const styles = {
  table: css({
    border: `solid 1px ${themed("--border-colour")}`,
    borderRadius: border.radius.m,
    outline: "none",
    overflow: "hidden",
    borderSpacing: 0,
    alignSelf: "start",
    width: "100%",
    wordBreak: "break-word",
    forcedColorAdjust: "none",

    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-1px",
    },

    "&[data-drop-target]": {
      outline: `2px solid ${themed("--highlight-bg-selected")}`,
      outlineOffset: "-1px",
      background: themed("--highlight-bg-hover"),
    },
    "@supports selector(:has(.foo))": {
      "[role=row][data-selected]:has(+ [data-selected]), [role=row][data-selected]:has(+ .react-aria-DropIndicator + [data-selected])":
        {
          "--radius-bottom": "0px",
        },
      "[role=row][data-selected] + [data-selected], [role=row][data-selected] + .react-aria-DropIndicator + [data-selected]":
        {
          "--radius-top": "0px",
        },
    },
  }),
  header: css({
    background: themed("--background-colour-secondary"),

    "& tr:last-child [role=columnheader]": {
      borderBottom: `solid 1px ${themed("--border-colour")}`,
      cursor: "default",
    },
  }),
  row: css({
    borderRadius: "var(--radius)",
    clipPath: "inset(0 round var(--radius))",
    outline: "none",
    cursor: "default",
    position: "relative",
    transform: "scale(1)",

    "--radius-top": border.radius.m,
    "--radius-bottom": border.radius.m,
    "--radius": "var(--radius-top) var(--radius-top) var(--radius-bottom) var(--radius-bottom)",

    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-2px",
    },
    "&[data-pressed]": {
      background: themed("--highlight-bg-pressed"),
    },
    "&[data-selected]": {
      background: themed("--highlight-bg-selected"),
      color: themed("--highlight-colour-selected"),

      "--focus-ring-colour": themed("--highlight-colour-selected"),

      "&[data-focus-visible], [role=gridcell][data-focus-visible]": {
        outlineOffset: "-4px",
      },
    },
    "&[data-disabled]": {
      color: themed("--text-colour-disabled"),
    },
    "&[data-href]": {
      cursor: "pointer",
    },
    "&[data-dragging]": {
      opacity: 0.6,
      transform: "translateZ(0)",
    },
    "&[slot=drag]": {
      all: "unset",
      width: "15px",
      textAlign: "center",

      "&[data-focus-visible]": {
        borderRadius: "4px",
        outline: `2px solid ${themed("--focus-ring-colour")}`,
      },
    },

    "&[data-drop-target]": {
      outline: "2px solid var(--highlight-background)",
      background: "var(--highlight-overlay)",
    },

    "[slot=selection]": {
      "--selected-color": themed("--highlight-colour-selected"),
      "--selected-color-pressed": "var(--highlight-foreground-pressed)",
      "--checkmark-color": themed("--highlight-bg-selected"),
      "--background-colour": themed("--highlight-bg-selected"),
    },
  }),
  column: css({
    outline: "none",
    padding: `${spacing.xs} ${spacing.s}`,
    textAlign: "left",

    "&:not([data-sort-direction]) .sort-indicator": {
      visibility: "hidden",
    },
    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-2px",
    },

    ".sort-indicator": {
      padding: "0 2px",
    },
  }),
  cell: css({
    img: {
      height: "30px",
      width: "30px",
      objectFit: "cover",
      display: "block",
    },
    outline: "none",
    padding: `${spacing.xs} ${spacing.s}`,
    textAlign: "left",
    transform: "translateZ(0)",

    "&:first-of-type": {
      borderRadius: "var(--radius-top) 0 0 var(--radius-bottom)",
    },
    "&:last-of-type": {
      borderRadius: "0 var(--radius-top) var(--radius-bottom) 0",
    },
    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-2px",
    },
  }),
  body: css({
    "&[data-empty]": {
      textAlign: "center",
      fontStyle: "italic",
    },
  }),
  resizableContainer: css({
    maxWidth: "400px",
    overflow: "auto",
    position: "relative",
    border: `solid 1px ${themed("--border-colour")}`,
    borderRadius: "6px",
    background: "var(--background-colour)",
    "[role=grid]": { border: "none" },
    ".column-name, [role=button]": {
      "--background-colour": themed("--overlay-background"),
      flex: 1,
      font: "inherit",
      textAlign: "start",
      color: "inherit",
      overflow: "hidden",
      textOverflow: "ellipsis",
      borderColor: "transparent",
      transition: "background 200ms",
      "&[data-hovered]": {
        background: themed("--highlight-bg-hover"),
      },
      "&[data-pressed]": {
        background: themed("--highlight-bg-pressed"),
        boxShadow: "none",
      },
      "&:focus-visible": {
        outline: `2px solid ${themed("--focus-ring-colour")}`,
      },

      "[role=columnheader], [role=gridcell]": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  }),
  columnResizer: css({
    width: "15px",
    backgroundColor: "grey",
    height: "25px",
    flex: "0 0 auto",
    touchAction: "none",
    boxSizing: "border-box",
    border: "5px",
    borderStyle: "none solid",
    borderColor: "transparent",
    backgroundClip: "content-box",
    "&[data-resizable-direction=both]": { cursor: "ew-resize" },
    "&[data-resizable-direction=left]": { cursor: "e-resize" },
    "&[data-resizable-direction=right]": { cursor: "w-resize" },
    "&[data-focus-visible]": { backgroundColor: "var(--focus-ring-colour)" },
    "&[data-resizing]": {
      borderColor: "var(--focus-ring-colour)",
      backgroundColor: "transparent",
    },
  }),
  dropIndicator: css({
    "&[data-drop-target]": {
      outline: `1px solid ${themed("--highlight-bg-hover")}`,
      transform: "translateZ(0)",
    },
  }),
};
