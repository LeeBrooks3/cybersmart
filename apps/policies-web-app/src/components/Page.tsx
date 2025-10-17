import { css } from "@emotion/react";
import type { HasContainerProp } from "@leebrooks3/ui/utils/container";
import { containerStyles } from "@leebrooks3/ui/utils/container";
import type { HasFlexProp } from "@leebrooks3/ui/utils/flex";
import { flexStyles } from "@leebrooks3/ui/utils/flex";
import type { HasPaddingProp } from "@leebrooks3/ui/utils/padding";
import { paddingStyles } from "@leebrooks3/ui/utils/padding";
import type { ComponentProps } from "react";

interface PageProps extends ComponentProps<"main">, HasContainerProp, HasFlexProp, HasPaddingProp {
  //
}

export const Page = ({ children, container, flex, padding = true, ...props }: PageProps) => (
  <main css={css(styles.page, containerStyles(container), flexStyles(flex), paddingStyles(padding))} {...props}>
    {children}
  </main>
);

interface PageHeaderProps extends ComponentProps<"header">, HasContainerProp, HasFlexProp, HasPaddingProp {
  //
}

export const PageHeader = ({ children, container, flex, padding = true, ...props }: PageHeaderProps) => (
  <header css={css(containerStyles(container), flexStyles(flex), paddingStyles(padding))} {...props}>
    {children}
  </header>
);

const styles = {
  page: css({
    flexGrow: 1,
  }),
};
