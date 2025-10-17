/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ComponentProps } from "react";
import { Header as AriaHeader } from "react-aria-components";

import type { HasFlexProp } from "../../utils/flex";
import { flexStyles } from "../../utils/flex";

export interface HeaderProps extends ComponentProps<"header">, HasFlexProp {
  //
}

export const Header = ({ flex, ...props }: HeaderProps) => {
  return <AriaHeader css={[styles.header, flex && flexStyles(flex)]} {...props} />;
};

const styles = {
  header: css({
    //
  }),
};
