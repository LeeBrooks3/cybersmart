/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ReactNode } from "react";
import type { SwitchProps as AriaSwitchProps } from "react-aria-components";
import { Switch as AriaSwitch } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";

export interface SwitchProps extends Omit<AriaSwitchProps, "children"> {
  children: ReactNode;
}

export function Switch({ children, ...props }: SwitchProps) {
  return (
    <AriaSwitch css={styles.switch} {...props}>
      <div className="indicator" />
      {children}
    </AriaSwitch>
  );
}

const styles = {
  switch: css({
    alignItems: "center",
    display: "flex",
    forcedColorAdjust: "none",
    gap: spacing.s,

    "&[data-disabled]": {
      color: themed("--text-colour-disabled"),

      ".indicator": {
        borderColor: themed("--border-colour-disabled"),

        "&:before": {
          background: themed("--border-colour-disabled"),
        },
      },
    },
    "&[data-focus-visible] .indicator": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "2px",
    },
    "&[data-pressed] .indicator": {
      borderColor: themed("--border-colour-pressed"),

      "&:before": {
        background: themed("--highlight-bg-selected-pressed"),
      },
    },
    "&[data-selected]": {
      ".indicator": {
        background: themed("--highlight-bg-selected"),
        borderColor: themed("--highlight-bg-selected"),

        "&:before": {
          background: themed("--field-background"),
          transform: "translateX(100%)",
        },
      },
      "&[data-pressed]": {
        ".indicator": {
          background: themed("--highlight-bg-selected-pressed"),
          borderColor: themed("--highlight-bg-selected-pressed"),
        },
      },
    },

    ".indicator": {
      background: themed("--background-colour-secondary"),
      border: `2px solid ${themed("--border-colour")}`,
      borderRadius: "1rem",
      boxSizing: "border-box",
      height: "1.25rem",
      transition: "all 200ms",
      width: "2rem",

      "&:before": {
        background: themed("--highlight-bg-selected"),
        borderRadius: "0.375rem",
        content: "''",
        display: "block",
        height: "0.75rem",
        margin: "0.125rem",
        transition: "all 200ms",
        width: "0.75rem",
      },
    },
  }),
};
