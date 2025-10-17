import type { CSSObject, SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";

import { deviceBreakpoints } from "../tokens/devices";
import { spacing } from "../tokens/spacing";

interface GridProps {
  cols?: number;
  gap?: keyof typeof spacing | 0;
}

type GridPropMap = Partial<Record<keyof typeof deviceBreakpoints, GridProps>>;

type GridProp = GridProps & GridPropMap;

export interface HasGridProp {
  grid?: GridProp;
}

const mkGridStyles = ({ cols, gap }: GridProps): Pick<CSSObject, "display" | "gap" | "gridTemplateColumns"> => ({
  display: "grid",
  gap: gap ? spacing[gap] : gap,
  gridTemplateColumns: cols
    ? Array.from(Array(cols))
        .map(() => "1fr")
        .join(" ")
    : undefined,
});

export const gridStyles = (grid: GridProp): SerializedStyles => {
  return css([
    mkGridStyles({
      gap: "m",
      ...grid,
    }),
    ...Object.entries(grid)
      .filter(([key]) => key in deviceBreakpoints)
      .map(([key, value]) => ({
        [`@media screen and (min-width: ${deviceBreakpoints[key as keyof typeof deviceBreakpoints]})`]:
          mkGridStyles(value),
      })),
  ]);
};
