/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { MeterProps as AriaMeterProps } from "react-aria-components";
import { Meter as AriaMeter } from "react-aria-components";

import { themed } from "../../tokens/theme";
import { Label } from "./Label";

export interface MeterProps extends AriaMeterProps {
  label?: string;
}

export function Meter({ label, ...props }: MeterProps) {
  return (
    <AriaMeter css={styles.meter} {...props}>
      {({ percentage, valueText }) => (
        <>
          <Label>{label}</Label>
          <span className="value">{valueText}</span>
          <div className="bar">
            <div className="fill" style={{ width: percentage + "%" }} />
          </div>
        </>
      )}
    </AriaMeter>
  );
}

const styles = {
  meter: css({
    "--fill-color": "forestgreen",
    display: "grid",
    gridTemplateAreas: '"label value"\n                       "bar bar"',
    gridTemplateColumns: "1fr auto",
    gap: "4px",
    width: "250px",
    color: themed("--text-colour"),
    ".value": {
      gridArea: "value",
    },
    ".bar": {
      gridArea: "bar",
      boxShadow: `inset 0px 0px 0px 1px ${themed("--border-colour")}`,
      forcedColorAdjust: "none",
      height: "10px",
      borderRadius: "5px",
      overflow: "hidden",
    },
    ".fill": {
      background: "var(--fill-color)",
      height: "100%",
    },
    "@media (forced-colors: active)": {
      "--fill-color": "Highlight",
    },
  }),
};
