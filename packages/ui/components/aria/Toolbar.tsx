/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ToolbarProps as AriaToolbarProps } from "react-aria-components";
import { Toolbar as AriaToolbar } from "react-aria-components";

export interface ToolbarProps extends AriaToolbarProps {
  //
}

export function Toolbar({ ...props }: ToolbarProps) {
  return <AriaToolbar css={styles.toolbar} {...props} />;
}

const styles = {
  toolbar: css({
    display: "flex",
    flexWrap: "wrap",

    "&[data-orientation=horizontal]": {
      alignItems: "center",
      flexDirection: "row",
    },
    "&[data-orientation=vertical]": {
      alignItems: "start",
      flexDirection: "column",
    },
  }),
};
