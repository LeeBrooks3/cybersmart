import type { SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";

import { deviceBreakpoints } from "../tokens/devices";

export interface HasContainerProp {
  container?: true | keyof typeof deviceBreakpoints;
}

export const containerStyles = (container: HasContainerProp["container"]): SerializedStyles => {
  const breakPoint = container === true ? "m" : container;

  return css({
    boxSizing: "border-box",
    marginLeft: container ? "auto" : undefined,
    marginRight: container ? "auto" : undefined,
    maxWidth: breakPoint ? deviceBreakpoints[breakPoint] : undefined,
    width: container ? "100%" : undefined,
  });
};
