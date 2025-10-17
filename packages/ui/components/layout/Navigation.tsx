/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ComponentProps } from "react";

import type { HasFlexProp } from "../../utils/flex";
import { flexStyles } from "../../utils/flex";

export interface NavigationProps extends ComponentProps<"nav">, HasFlexProp {
  //
}

export const Navigation = ({ flex = {}, ...props }: NavigationProps) => {
  return <nav css={[styles.navigation, flexStyles(flex)]} {...props} />;
};

const styles = {
  navigation: css({
    //
  }),
};
