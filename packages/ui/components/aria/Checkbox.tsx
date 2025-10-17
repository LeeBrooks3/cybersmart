/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { CheckboxProps as AriaCheckboxProps } from "react-aria-components";
import { Checkbox as AriaCheckbox } from "react-aria-components";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";

export interface CheckboxProps extends AriaCheckboxProps {
  //
}

export function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <AriaCheckbox css={styles.checkbox} {...props}>
      {({ isIndeterminate }) => (
        <>
          <div className="checkbox">
            <svg css={styles.svg} viewBox="0 0 18 18" aria-hidden="true">
              {isIndeterminate ? <rect x={2} y={7} width={14} height={3} /> : <polyline points="2 9 7 14 15 4" />}
            </svg>
          </div>
          {children}
        </>
      )}
    </AriaCheckbox>
  );
}

const styles = {
  checkbox: css({
    alignItems: "center",
    display: "flex",
    forcedColorAdjust: "none",
    gap: spacing.s,

    "--checkmark-color": themed("--highlight-colour-selected"),
    "--selected-color": themed("--highlight-bg-selected"),
    "--selected-color-pressed": themed("--highlight-bg-selected-pressed"),

    ".checkbox": {
      alignItems: "center",
      border: `2px solid ${themed("--border-colour")}`,
      borderRadius: border.radius.m,
      boxSizing: "border-box",
      display: "flex",
      height: "1.25rem",
      justifyContent: "center",
      transition: "all 200ms",
      width: "1.25rem",
    },

    "&[data-disabled]": {
      color: themed("--text-colour-disabled"),
      ".checkbox": {
        borderColor: themed("--border-colour-disabled"),
      },
    },
    "&[data-focus-visible] .checkbox": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "2px",
    },
    "&[data-indeterminate]": {
      "& svg": {
        stroke: "none",
        fill: "var(--checkmark-color)",
      },
    },
    "&[data-invalid]": {
      ".checkbox": {
        borderColor: themed("--invalid-colour"),

        "--checkmark-color": themed("--field-background"),
      },
      "&[data-pressed] .checkbox": {
        borderColor: themed("--invalid-colour-pressed"),
      },
      "&[data-selected], &[data-indeterminate]": {
        "&[data-pressed] .checkbox": {
          background: themed("--invalid-colour-pressed"),
        },

        ".checkbox": {
          background: themed("--invalid-colour"),
        },
      },
    },
    "&[data-pressed] .checkbox": {
      borderColor: themed("--border-colour-pressed"),
    },
    "&[data-selected], &[data-indeterminate]": {
      ".checkbox": {
        borderColor: "var(--selected-color)",
        background: "var(--selected-color)",
      },
      "&[data-pressed] .checkbox": {
        borderColor: "var(--selected-color-pressed)",
        background: "var(--selected-color-pressed)",
      },
      svg: {
        strokeDashoffset: 44,
      },
    },
  }),
  svg: css({
    width: "1rem",
    height: "1rem",
    fill: "none",
    stroke: "var(--checkmark-color)",
    strokeWidth: "3px",
    strokeDasharray: "22px",
    strokeDashoffset: 66,
    transition: "all 200ms",
  }),
};
