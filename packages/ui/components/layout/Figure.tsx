/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ComponentProps } from "react";

import { border } from "../../tokens/border";
import { themed } from "../../tokens/theme";

export interface FigureProps extends ComponentProps<"dl"> {
  background?: "primary" | "secondary";
}

export const Figure = ({ children, background, ...props }: FigureProps) => {
  return (
    <figure css={styles.figure({ background })} {...props}>
      {children}
    </figure>
  );
};

const styles = {
  figure: ({ background }: Pick<FigureProps, "background">) =>
    css({
      background: background ? themed(`--background-colour-${background}`) : undefined,
      border: `solid 1px ${themed("--border-colour")}`,
      borderRadius: border.radius.m,
      margin: "unset",
    }),
};
