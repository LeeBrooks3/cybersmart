/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ReactNode } from "react";
import type {
  TooltipProps as AriaTooltipProps,
  TooltipTriggerComponentProps as AriaTooltipTriggerProps,
} from "react-aria-components";
import { Tooltip as AriaTooltip, TooltipTrigger as AriaTooltipTrigger } from "react-aria-components";

import { themed } from "../../tokens/theme";
import { OverlayArrow } from "./OverlayArrow";

export interface TooltipProps extends Omit<AriaTooltipProps, "children"> {
  children: ReactNode;
}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <AriaTooltip css={styles.tooltip} {...props}>
      <OverlayArrow slot="arrow">
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </AriaTooltip>
  );
}

export interface TooltipTriggerProps extends AriaTooltipTriggerProps {
  //
}

export function TooltipTrigger(props: TooltipTriggerProps) {
  return <AriaTooltipTrigger {...props} />;
}

const styles = {
  tooltip: css({
    boxShadow: "0 8px 20px rgba(0 0 0 / 0.1)",
    borderRadius: "4px",
    background: themed("--highlight-bg-selected"),
    color: themed("--highlight-colour-selected"),
    forcedColorAdjust: "none",
    outline: "none",
    padding: "2px 8px",
    maxWidth: "150px",
    transform: "translate3d(0, 0, 0)",
    transition: "transform 200ms, opacity 200ms",
    "&[data-entering], &[data-exiting]": {
      transform: "var(--origin)",
      opacity: 0,
    },
    "&[data-placement=top]": {
      marginBottom: "8px",
      "--origin": "translateY(4px)",
    },
    "&[data-placement=bottom]": {
      marginTop: "8px",
      "--origin": "translateY(-4px)",
      "& [slot=arrow] svg": { transform: "rotate(180deg)" },
    },
    "&[data-placement=right]": {
      marginLeft: "8px",
      "--origin": "translateX(-4px)",
      "& [slot=arrow] svg": { transform: "rotate(90deg)" },
    },
    "&[data-placement=left]": {
      marginRight: "8px",
      "--origin": "translateX(4px)",
      "& [slot=arrow] svg": { transform: "rotate(-90deg)" },
    },
    "& [slot=arrow] svg": {
      display: "block",
      fill: themed("--highlight-bg-selected"),
    },
  }),
};
