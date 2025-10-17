import type { CSSObject, SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";

import { deviceBreakpoints } from "../tokens/devices";
import { spacing } from "../tokens/spacing";

interface FlexProps {
  alignItems?: CSSObject["alignItems"];
  basis?: CSSObject["flexBasis"];
  direction?: CSSObject["flexDirection"];
  gap?: keyof typeof spacing | 0;
  grow?: CSSObject["flexGrow"];
  justifyContent?: CSSObject["justifyContent"];
  shrink?: CSSObject["flexShrink"];
  width?: CSSObject["width"];
  height?: CSSObject["height"];
  order?: CSSObject["order"];
}

type FlexPropMap = Partial<Record<keyof typeof deviceBreakpoints, FlexProps>>;

type FlexProp = FlexProps & FlexPropMap;

export interface HasFlexProp {
  flex?: FlexProp;
}

const mkFlexStyles = ({
  alignItems,
  basis,
  direction,
  gap,
  grow,
  justifyContent,
  shrink,
  width,
  height,
  order,
}: FlexProps): Pick<
  CSSObject,
  | "alignItems"
  | "display"
  | "flexBasis"
  | "flexDirection"
  | "flexGrow"
  | "flexShrink"
  | "gap"
  | "justifyContent"
  | "width"
  | "height"
  | "order"
> => ({
  alignItems,
  display: "flex",
  flexBasis: basis,
  flexDirection: direction,
  flexGrow: grow,
  flexShrink: shrink,
  gap: gap ? spacing[gap] : gap,
  justifyContent,
  width,
  height,
  order,
});

export const flexStyles = (flex?: FlexProp): SerializedStyles | undefined => {
  if (!flex) {
    return;
  }

  return css([
    mkFlexStyles({
      gap: "m",
      ...flex,
    }),
    ...Object.entries(flex)
      .filter(([key]) => key in deviceBreakpoints)
      .map(([key, value]) => ({
        [`@media screen and (min-width: ${deviceBreakpoints[key as keyof typeof deviceBreakpoints]})`]:
          mkFlexStyles(value),
      })),
  ]);
};
