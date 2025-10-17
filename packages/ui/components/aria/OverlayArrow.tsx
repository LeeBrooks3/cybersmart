/** @jsxImportSource @emotion/react */
import type { OverlayArrowProps as AriaOverlayArrowProps } from "react-aria-components";
import { OverlayArrow as AriaOverlayArrow } from "react-aria-components";

export interface OverlayArrowProps extends AriaOverlayArrowProps {
  //
}

export const OverlayArrow = (props: OverlayArrowProps) => {
  return <AriaOverlayArrow {...props} />;
};
