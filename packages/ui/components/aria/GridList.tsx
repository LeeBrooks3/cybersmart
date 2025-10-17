/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type {
  GridListItemProps as AriaGridListItemProps,
  GridListProps as AriaGridListProps,
} from "react-aria-components";
import { GridList as AriaGridList, GridListItem as AriaGridListItem } from "react-aria-components";

import { themed } from "../../tokens/theme";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

export interface GridListProps<T extends object> extends AriaGridListProps<T> {
  //
}

export function GridList<T extends object>({ children, ...props }: GridListProps<T>) {
  return (
    <AriaGridList css={styles.gridList} {...props}>
      {children}
    </AriaGridList>
  );
}

export interface GridListItemProps extends AriaGridListItemProps {
  //
}

export function GridListItem({ children, ...props }: GridListItemProps) {
  const textValue = typeof children === "string" ? children : undefined;
  return (
    <AriaGridListItem css={styles.item} textValue={textValue} {...props}>
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && (
            <Button css={styles.button} slot="drag">
              ≡
            </Button>
          )}
          {selectionMode === "multiple" && selectionBehavior === "toggle" && <Checkbox slot="selection" />}
          {children}
        </>
      )}
    </AriaGridListItem>
  );
}

const styles = {
  gridList: css({
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    maxHeight: ["inherit", "300px"],
    overflow: "auto",
    padding: "4px",
    border: `solid 1px ${themed("--border-colour")}`,
    borderRadius: "6px",
    background: themed("--overlay-background"),
    forcedColorAdjust: "none",
    outline: "none",
    width: "250px",
    minHeight: "100px",
    boxSizing: "border-box",
    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-1px",
    },
    "@supports selector(:has(.foo))": {
      gap: "0",
      "> [role=row][data-selected]:has(+ [data-selected]), > [role=row][data-selected]:has(+ .react-aria-DropIndicator + [data-selected])":
        {
          borderEndStartRadius: "0",
          borderEndEndRadius: "0",
        },
      "> [role=row][data-selected] + [data-selected], > [role=row][data-selected] + .react-aria-DropIndicator + [data-selected]":
        {
          borderStartStartRadius: "0",
          borderStartEndRadius: "0",
        },
    },
    "&[data-empty]": {
      alignItems: "center",
      justifyContent: "center",
      fontStyle: "italic",
    },
    "[data-drop-target]": {
      outline: "2px solid var(--highlight-background)",
      outlineOffset: "-1px",
      background: "var(--highlight-overlay)",
    },
  }),
  item: css({
    display: "flex",
    alignItems: "center",
    gap: "0.571rem",
    minHeight: "28px",
    padding: "0.286rem 0.286rem 0.286rem 0.571rem",
    borderRadius: "6px",
    outline: "none",
    cursor: "default",
    color: themed("--text-colour"),
    fontSize: "1.072rem",
    position: "relative",
    transform: "translateZ(0)",
    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-2px",
    },
    "&[data-pressed]": {
      background: themed("--background-colour-secondary"),
    },
    "&[data-selected]": {
      background: themed("--highlight-bg-selected"),
      color: themed("--highlight-colour-selected"),
      "--focus-ring-colour": themed("--highlight-colour-selected"),
      "&[data-focus-visible]": {
        outlineColor: themed("--highlight-colour-selected"),
        outlineOffset: "-4px",
      },
      "[slot=drag]": {
        color: themed("--highlight-colour-selected"),
        "--highlight-hover": "rgb(255 255 255 / 0.1)",
        "--highlight-pressed": "rgb(255 255 255 / 0.2)",
      },
    },
    "&[data-disabled]": { color: themed("--text-colour-disabled") },
    "&[data-allows-dragging]": { paddingLeft: "4px" },
    "&[data-dragging]": { opacity: 0.6 },

    "[data-href]": {
      cursor: "pointer",
    },
    "[slot=drag]": {
      all: "unset",
      width: "15px",
      textAlign: "center",
      "&[data-focus-visible]": {
        borderRadius: "4px",
        outline: `2px solid ${themed("--focus-ring-colour")}`,
      },
    },
    "[data-drop-target]": {
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
  button: css({
    background: "transparent",
    border: "none",
    fontSize: "1.2rem",
    lineHeight: "1.2em",
    padding: "0.286rem 0.429rem",
    transition: "background 200ms",
    "&[data-hovered]": {
      background: themed("--highlight-bg-hover"),
    },
    "&[data-pressed]": {
      background: themed("--highlight-bg-pressed"),
    },

    ":not([slot])": {
      marginLeft: "auto",
    },
  }),
  dropIndicator: css({
    "&[data-drop-target]": {
      outline: "1px solid var(--highlight-background)",
    },
    "@supports not selector(:has(.foo))": {
      marginBottom: "-2px",
    },
  }),
};
