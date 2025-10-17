/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type {
  TabListProps as AriaTabListProps,
  TabPanelProps as AriaTabPanelProps,
  TabProps as AriaTabProps,
  TabsProps as AriaTabsProps,
} from "react-aria-components";
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
} from "react-aria-components";

import { themed } from "../../tokens/theme";

export interface TabsProps extends AriaTabsProps {
  //
}

export function Tabs(props: TabsProps) {
  return <AriaTabs css={styles.tabs} {...props} />;
}

export interface TabListProps<T extends object> extends AriaTabListProps<T> {
  //
}

export function TabList<T extends object>(props: TabListProps<T>) {
  return <AriaTabList css={styles.tabList} {...props} />;
}

export interface TabProps extends AriaTabProps {
  //
}

export function Tab(props: TabProps) {
  return <AriaTab css={styles.tab} {...props} />;
}

export interface TabPanelProps extends AriaTabPanelProps {
  //
}

export function TabPanel(props: TabPanelProps) {
  return <AriaTabPanel css={styles.tabPanel} {...props} />;
}

const styles = {
  tabs: css({
    display: "flex",
    color: themed("--text-colour"),
    "&[data-orientation=horizontal]": {
      flexDirection: "column",
    },
    "&[data-orientation=vertical]": {
      flexDirection: "row",
    },
  }),
  tabList: css({
    display: "flex",
    "&[data-orientation=horizontal]": {
      borderBottom: `solid 1px ${themed("--border-colour")}`,

      "[role=tab]": {
        borderBottom: `3px solid ${themed("--border-colour")}`,
      },
    },
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      borderInlineEnd: "1px solid gray",
      "[role=tab]": {
        borderInlineEnd: `3px solid ${themed("--border-colour")}`,
      },
    },
  }),
  tab: css({
    color: themed("--link-colour"),
    cursor: "default",
    forcedColorAdjust: "none",
    outline: "none",
    padding: "10px",
    position: "relative",
    transition: "color 200ms",

    "--border-colour": "transparent",

    "&[data-disabled]": {
      color: themed("--text-colour-disabled"),
      "&[data-selected]": {
        "--border-colour": themed("--border-colour-disabled"),
      },
    },
    "&[data-focus-visible]:after": {
      content: "''",
      position: "absolute",
      inset: "4px",
      borderRadius: "4px",
      border: `2px solid ${themed("--focus-ring-colour")}`,
    },
    "&[data-hovered], &[data-focused]": {
      color: themed("--link-colour-hover"),
    },
    "&[data-selected]": {
      color: themed("--text-colour"),

      "--border-colour": themed("--highlight-bg-selected"),
    },
    "&[href]": {
      textDecoration: "none",
      cursor: "pointer",
    },
  }),
  tabPanel: css({
    marginTop: "4px",
    padding: "10px",
    borderRadius: "4px",
    outline: "none",
    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
    },
  }),
};
