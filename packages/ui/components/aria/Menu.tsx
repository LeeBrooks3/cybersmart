/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChevronRight } from "lucide-react";
import type {
  MenuItemProps as AriaMenuItemProps,
  MenuProps as AriaMenuProps,
  MenuSectionProps as AriaMenuSectionProps,
  MenuTriggerProps as AriaMenuTriggerProps,
} from "react-aria-components";
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuSection as AriaMenuSection,
  MenuTrigger as AriaMenuTrigger,
} from "react-aria-components";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import { Icon } from "../icons/Icon";
import { Button } from "./Button";
import { Popover } from "./Popover";

export interface MenuProps<T extends object> extends AriaMenuProps<T> {
  //
}

export function Menu<T extends object>(props: MenuProps<T>) {
  return <AriaMenu css={styles.menu} {...props} />;
}

export interface MenuTriggerProps extends AriaMenuTriggerProps {
  //
}

export function MenuTrigger(props: MenuTriggerProps) {
  return <AriaMenuTrigger {...props} />;
}

export interface MenuButtonProps<T> extends AriaMenuProps<T>, Omit<MenuTriggerProps, "children"> {
  label?: string;
}

export function MenuButton<T extends object>({ label, children, ...props }: MenuButtonProps<T>) {
  return (
    <MenuTrigger {...props}>
      <Button>{label}</Button>
      <Popover css={styles.popover}>
        <Menu {...props}>{children}</Menu>
      </Popover>
    </MenuTrigger>
  );
}

export function MenuItem(props: AriaMenuItemProps) {
  const textValue = props.textValue || (typeof props.children === "string" ? props.children : undefined);
  return (
    <AriaMenuItem css={styles.item} {...props} textValue={textValue}>
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && <Icon icon={ChevronRight} />}
        </>
      )}
    </AriaMenuItem>
  );
}

export interface MenuSectionProps<T extends object> extends AriaMenuSectionProps<T> {
  //
}

export function MenuSection<T extends object>(props: MenuSectionProps<T>) {
  return <AriaMenuSection css={styles.section} {...props}></AriaMenuSection>;
}

const styles = {
  menu: css({
    boxSizing: ["border-box", "border-box"],
    maxHeight: "inherit",
    minWidth: "150px",
    outline: "none",
    overflow: "auto",
    padding: spacing.xxs,
  }),
  section: css({
    header: {
      padding: `${spacing.xxs} ${spacing.xs}`,
    },
  }),
  item: css({
    alignItems: "center",
    borderRadius: border.radius.m,
    cursor: "pointer",
    display: "grid",
    gridTemplateAreas: '"label kbd" "desc  kbd"',
    outline: "none",
    padding: `${spacing.xxs} ${spacing.xs}`,
    position: "relative",

    kbd: {
      gridArea: "kbd",
      fontFamily: "monospace",
      textAlign: "end",
    },

    "&[data-disabled]": {
      color: themed("--text-colour-disabled"),
    },
    "&[data-focused]": {
      background: themed("--highlight-bg-selected"),
      color: themed("--highlight-colour-selected"),
    },
    "&[data-selection-mode]": {
      paddingRight: spacing.xxl,
      "&::before": {
        position: "absolute",
        right: spacing.xs,
      },
      "&[data-selection-mode=multiple][data-selected]::before": {
        content: ["'✓'", "'✓' / ''"],
        alt: "' '",
        position: "absolute",
        right: spacing.xs,
      },
      "&[data-selection-mode=single][data-selected]::before": {
        content: ["'●'", "'●' / ''"],
      },
    },
    "&[href]": {
      textDecoration: "none",
      cursor: "pointer",
    },
    "[slot=description]": {
      fontSize: "small",
      gridArea: "desc",
    },
    "[slot=label]": {
      fontWeight: "bold",
      gridArea: "label",
    },
  }),
  popover: css({
    '&[data-trigger=SubmenuTrigger][data-placement="right"]': {
      marginLeft: "-5px",
    },
    '&[data-trigger=SubmenuTrigger][data-placement="left"]': {
      marginRight: "-5px",
    },
    "> [role=dialog]": {
      padding: 0,
    },
  }),
};
