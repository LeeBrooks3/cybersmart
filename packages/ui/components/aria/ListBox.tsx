/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type {
  ListBoxItemProps as AriaListBoxItemProps,
  ListBoxProps as AriaListBoxProps,
  ListBoxSectionProps as AriaListBoxSectionProps,
} from "react-aria-components";
import {
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxSection as AriaListBoxSection,
} from "react-aria-components";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";

export interface ListBoxProps<T extends object> extends AriaListBoxProps<T> {
  //
}

export function ListBox<T extends object>({ children, ...props }: ListBoxProps<T>) {
  return (
    <AriaListBox css={styles.listBox} {...props}>
      {children}
    </AriaListBox>
  );
}

export interface ListBoxItemProps extends AriaListBoxItemProps {
  //
}

export function ListBoxItem(props: ListBoxItemProps) {
  return <AriaListBoxItem css={styles.item} {...props} />;
}

export interface ListBoxSectionProps<T> extends AriaListBoxSectionProps<T> {
  //
}

export function ListBoxSection<T extends object>(props: ListBoxSectionProps<T>) {
  return <AriaListBoxSection css={styles.section} {...props} />;
}

const styles = {
  listBox: css({
    background: themed("--overlay-background"),
    border: `solid 1px ${themed("--border-colour")}`,
    borderRadius: border.radius.m,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    forcedColorAdjust: "none",
    maxHeight: ["inherit", "300px"],
    minHeight: "100px",
    outline: "none",
    overflow: "auto",
    padding: spacing.xxs,
    width: "250px",

    "&[data-drop-target]": {
      outline: "2px solid var(--highlight-background)",
      outlineOffset: "-1px",
      background: "var(--highlight-overlay)",
    },
    "&[data-empty]": {
      alignItems: "center",
      justifyContent: "center",
      fontStyle: "italic",
    },
    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-1px",
    },
    "&[data-layout=grid]": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      scrollbarGutter: "stable",
    },
    "&[data-layout=grid][data-orientation=horizontal]": {
      width: "100%",
      maxWidth: "none",
      display: "grid",
      gridAutoFlow: "column",
      gridTemplateRows: "58px 58px",
      gridTemplateColumns: "none",
      gridAutoColumns: "250px",
      maxHeight: "200px",
      gap: "8px",
      "> [role=option]": {
        display: "grid",
        gridTemplateAreas:
          '"image ."\n                         "image title"\n                         "image description"\n                         "image ."',
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: "1fr auto auto 1fr",
        columnGap: "8px",
        "& img": {
          width: "50px",
          height: "50px",
          gridArea: "image",
          marginBottom: "0",
        },
        "[slot=label]": { gridArea: "title" },
        "[slot=description]": { gridArea: "description" },
      },
    },
    "&[data-orientation=horizontal], &[data-layout=grid]": {
      flexDirection: "row",
      width: "fit-content",
      maxWidth: "100%",
      padding: "4px",
      "> [role=option]": {
        position: "relative",
        margin: "0",
        padding: "4px",
        "& img": {
          objectFit: "cover",
          aspectRatio: "1/1",
          maxWidth: "150px",
          marginBottom: "4px",
          borderRadius: "4px",
          transition: "box-shadow 200ms",
        },
        "&[data-hovered]": {
          "& img": {
            boxShadow: "0 0 8px rgb(from slateblue r g b / 0.5)",
          },
        },
        "&[data-selected]": {
          background: "none",
          color: "inherit",
          "& img": {
            boxShadow: "0 0 12px rgb(from slateblue r g b / 0.8)",
          },
          "&:after": {
            content: ["'✓'", "'✓' / ''"],
            alt: "' '",
            position: "absolute",
            top: "8px",
            right: "8px",
            background: themed("--highlight-bg-selected"),
            border: "2px solid var(--highlight-foreground)",
            color: themed("--highlight-colour-selected"),
            width: "22px",
            height: "22px",
            borderRadius: "22px",
            boxSizing: "border-box",
            fontSize: "14px",
            lineHeight: "1em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 8px rgb(0 0 0 / .5)",
          },
        },
      },
    },
  }),
  section: css({
    "&:not(:first-child)": {
      marginTop: "12px",
    },
  }),
  item: css({
    borderRadius: border.radius.m,
    color: themed("--text-colour"),
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    outline: "none",
    padding: `${spacing.xxs} ${spacing.xs}`,
    position: "relative",

    "&[data-disabled]": {
      color: themed("--text-colour-disabled"),
    },
    "&[data-dragging]": {
      opacity: 0.5,
    },
    "&[data-drop-target]": {
      outline: "2px solid var(--highlight-background)",
      background: "var(--highlight-overlay)",
    },
    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-2px",
    },
    "&[data-hovered]": {
      background: themed("--highlight-bg-hover"),
    },
    "&[data-pressed]": {
      background: themed("--highlight-bg-pressed"),
    },
    "&[data-selected]": {
      background: themed("--highlight-bg-selected"),
      color: themed("--highlight-colour-selected"),

      "&[data-hovered]": {
        background: themed("--highlight-bg-selected-pressed"),
      },
      "&[data-pressed]": {
        background: themed("--highlight-bg-selected-pressed"),
      },
    },
    "&[href]": {
      textDecoration: "none",
      cursor: "pointer",
      WebkitTouchCallout: "none",
    },
    "[slot=description]": {
      fontSize: "small",
    },
    "[slot=label]": {
      fontWeight: "bold",
    },
  }),
  ".react-aria-DropIndicator[data-drop-target]": {
    outline: "1px solid var(--highlight-background)",
  },
};
