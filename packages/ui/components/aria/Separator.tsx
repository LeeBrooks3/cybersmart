/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { SeparatorProps as AriaSeparatorProps } from "react-aria-components";
import { Separator as AriaSeparator } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";

export interface SeparatorProps extends AriaSeparatorProps {
  gap?: keyof typeof spacing | 0;
}

export const Separator = ({ gap = "m", orientation = "horizontal", ...props }: SeparatorProps) => {
  return <AriaSeparator css={styles.separator({ gap, orientation })} orientation={orientation} {...props} />;
};

const styles = {
  separator: ({ gap, orientation }: Pick<SeparatorProps, "gap" | "orientation">) =>
    css(
      {
        alignSelf: "stretch",
        backgroundColor: themed("--separator-colour"),
      },
      orientation === "vertical"
        ? {
            margin: gap ? `0 ${spacing[gap]}` : "unset",
            width: "1px",
          }
        : {
            border: "none",
            height: "1px",
            margin: gap ? `${spacing[gap]} 0` : "unset",
          },
    ),
};
