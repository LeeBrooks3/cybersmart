import { css } from "@emotion/react";
import type { ComponentProps, JSXElementConstructor } from "react";

import type { HasContainerProp } from "../../utils/container";
import { containerStyles } from "../../utils/container";
import type { HasFlexProp } from "../../utils/flex";
import { flexStyles } from "../../utils/flex";
import type { HasPaddingProp } from "../../utils/padding";
import { paddingStyles } from "../../utils/padding";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ElementType = keyof React.JSX.IntrinsicElements | JSXElementConstructor<any>;

export type FlexProps<T extends ElementType> = ComponentProps<T> &
  HasFlexProp &
  HasContainerProp &
  HasPaddingProp & {
    element?: T;
  };

export const Flex = <T extends ElementType>({
  children,
  element = "div",
  flex = {},
  container,
  padding,
  ...props
}: FlexProps<T>) => {
  const Element = element;

  return (
    <Element css={css(flexStyles(flex), containerStyles(container), paddingStyles(padding))} {...props}>
      {children}
    </Element>
  );
};
