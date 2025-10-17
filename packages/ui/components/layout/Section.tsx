/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ComponentProps } from "react";

import { colorSchemes } from "../../tokens/colours";
import { spacing } from "../../tokens/spacing";
import type { Theme } from "../../tokens/theme";
import { themed } from "../../tokens/theme";
import type { HasFlexProp } from "../../utils/flex";
import { flexStyles } from "../../utils/flex";
import type { HeaderProps } from "../aria/Header";
import { Header } from "../aria/Header";
import type { Heading3Props, Heading4Props } from "../Typography";
import { Heading3, Heading4 } from "../Typography";

export type SectionKind = "section" | "article" | "aside" | "main";

export type SectionProps<T extends SectionKind = SectionKind> = ComponentProps<T> &
  HasFlexProp & {
    background?: boolean;
    colourScheme?: "grey" | "blue";
    element?: T;
    theme?: Theme;
  };

export const Section = <T extends SectionKind = "section">({
  background,
  colourScheme,
  element,
  flex,
  theme,
  ...props
}: SectionProps<T>) => {
  const Element = element ?? "section";

  return (
    <Element
      css={[
        styles.section,
        styles.background({
          background,
          colourScheme,
        }),
        styles.theme(theme),
        flex && flexStyles(flex),
      ]}
      element={element ?? "section"}
      {...props}
    />
  );
};

interface SectionHeaderProps extends HeaderProps {
  //
}

export const SectionHeader = ({ ...props }: SectionHeaderProps) => {
  return <Header css={styles.header} {...props} />;
};

interface SectionFooterProps extends ComponentProps<"footer">, HasFlexProp {
  //
}

export const SectionFooter = ({ flex, ...props }: SectionFooterProps) => {
  return <footer css={[styles.footer, flex && flexStyles(flex)]} {...props} />;
};

interface SectionTitleProps extends Heading3Props {
  //
}

export const SectionTitle = ({ ...props }: SectionTitleProps) => {
  return <Heading3 css={styles.title} {...props} />;
};

interface SectionSubtitleProps extends Heading4Props {
  //
}

export const SectionSubtitle = ({ ...props }: SectionSubtitleProps) => {
  return <Heading4 css={styles.title} {...props} />;
};

const styles = {
  section: css({
    padding: spacing.m,
  }),
  background: ({ background, colourScheme }: Pick<SectionProps, "background" | "colourScheme">) => {
    if (!background) {
      return;
    }

    switch (colourScheme) {
      case "grey":
      default:
        return css({
          background: themed("--background-colour-primary"),
        });
    }
  },
  theme: (theme?: Theme) => {
    if (!theme) {
      return;
    }

    return css(colorSchemes[theme]);
  },
  header: css({
    paddingBottom: spacing.m,
  }),
  footer: css({
    paddingTop: spacing.m,
  }),
  title: css({
    //
  }),
  subtitle: css({
    //
  }),
};
