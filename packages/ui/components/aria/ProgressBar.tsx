/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ProgressBarProps as AriaProgressBarProps } from "react-aria-components";
import { Label, ProgressBar as AriaProgressBar } from "react-aria-components";

import { themed } from "../../tokens/theme";

export interface ProgressBarProps extends AriaProgressBarProps {
  label?: string;
}

export function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar css={styles.progressBar} {...props}>
      {({ percentage, valueText }) => (
        <>
          <Label>{label}</Label>
          <span className="value">{valueText}</span>
          <div className="bar">
            <div className="fill" style={{ width: percentage + "%" }} />
          </div>
        </>
      )}
    </AriaProgressBar>
  );
}

const styles = {
  progressBar: css({
    display: "grid",
    gridTemplateAreas: '"label value"\n                       "bar bar"',
    gridTemplateColumns: "1fr auto",
    gap: "4px",
    width: "250px",
    color: themed("--text-colour"),
    ".value": { gridArea: "value" },
    ".bar": {
      gridArea: "bar",
      boxShadow: `inset 0px 0px 0px 1px ${themed("--border-colour")}`,
      forcedColorAdjust: "none",
      height: "10px",
      borderRadius: "5px",
      overflow: "hidden",
      willChange: "transform",
    },
    ".fill": { background: themed("--highlight-bg-selected"), height: "100%" },
    "&:not([aria-valuenow])": {
      ".fill": {
        width: "120px",
        borderRadius: "inherit",
        animation: "indeterminate 1.5s infinite ease-in-out",
        willChange: "transform",
      },
    },
  }),
  "@keyframes indeterminate": {
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(250px)" },
  },
};
