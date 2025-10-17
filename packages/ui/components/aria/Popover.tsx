/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ReactNode } from "react";
import type { PopoverProps as AriaPopoverProps } from "react-aria-components";
import { Popover as AriaPopover } from "react-aria-components";

import { themed } from "../../tokens/theme";
import { Dialog } from "./Dialog";
import { OverlayArrow } from "./OverlayArrow";

export interface PopoverProps extends Omit<AriaPopoverProps, "children"> {
  children: ReactNode;
}

export function Popover({ children, ...props }: PopoverProps) {
  return (
    <AriaPopover css={styles.popover} {...props}>
      <OverlayArrow css={styles.overlayArrow} slot="arrow">
        <svg width={12} height={12} viewBox="0 0 12 12">
          <path d="M0 0 L6 6 L12 0" />
        </svg>
      </OverlayArrow>
      <Dialog>{children}</Dialog>
    </AriaPopover>
  );
}

const styles = {
  popover: css({
    "--background-colour": themed("--overlay-background"),
    border: `solid 1px ${themed("--border-colour")}`,
    boxShadow: "0 8px 20px rgba(0 0 0 / 0.1)",
    borderRadius: "6px",
    background: themed("--background-colour-primary"),
    color: themed("--text-colour"),
    outline: "none",
    maxWidth: "250px",
    transition: "transform 200ms, opacity 200ms",
    "&[data-entering],\n  &[data-exiting]": {
      transform: "var(--origin)",
      opacity: 0,
    },
    "&[data-placement=top]": {
      "--origin": "translateY(8px)",
      "&:has([slot=arrow])": { marginBottom: "6px" },
    },
    "&[data-placement=bottom]": {
      "--origin": "translateY(-8px)",
      "&:has([slot=arrow])": { marginTop: "6px" },
      "[slot=arrow] svg": { transform: "rotate(180deg)" },
    },
    "&[data-placement=right]": {
      "--origin": "translateX(-8px)",
      "&:has([slot=arrow])": { marginLeft: "6px" },
      "[slot=arrow] svg": { transform: "rotate(90deg)" },
    },
    "&[data-placement=left]": {
      "--origin": "translateX(8px)",
      "&:has([slot=arrow])": { marginRight: "6px" },
      "[slot=arrow] svg": { transform: "rotate(-90deg)" },
    },
  }),
  overlayArrow: css({
    svg: {
      display: "block",
      fill: themed("--background-colour-secondary"),
      stroke: themed("--border-colour"),
      strokeWidth: "1px",
    },
  }),
};
