import type { CSSObject } from "@emotion/react";
import { css } from "@emotion/react";

import { spacing } from "../tokens/spacing";

type PaddingProp =
  | undefined
  | boolean
  | keyof typeof spacing
  | {
      top?: keyof typeof spacing;
      right?: keyof typeof spacing;
      bottom?: keyof typeof spacing;
      left?: keyof typeof spacing;
    };

export interface HasPaddingProp {
  padding?: PaddingProp;
}

const mkPaddingStyles = (
  padding: PaddingProp,
): Pick<CSSObject, "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft"> => {
  if (padding === true) {
    return {
      padding: spacing.m,
    };
  }

  if (typeof padding === "string" && padding in Object.keys(spacing)) {
    return {
      padding: spacing[padding],
    };
  }

  if (typeof padding === "object") {
    return {
      paddingTop: padding.top ? spacing[padding.top] : undefined,
      paddingRight: padding.right ? spacing[padding.right] : undefined,
      paddingBottom: padding.bottom ? spacing[padding.bottom] : undefined,
      paddingLeft: padding.left ? spacing[padding.left] : undefined,
    };
  }

  return {
    //
  };
};

export const paddingStyles = (padding: PaddingProp) => {
  return css(mkPaddingStyles(padding));
};
