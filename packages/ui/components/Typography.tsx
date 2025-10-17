/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ComponentProps } from "react";

import { fontSizes, fontWeights, lineHeights } from "../tokens/typography";
import type { HeadingProps } from "./aria/Heading";
import { Heading } from "./aria/Heading";
import type { TextProps } from "./aria/Text";
import { Text } from "./aria/Text";

type HProps<T extends "h1" | "h2" | "h3" | "h4" | "h5" | "h6"> = ComponentProps<T> & Omit<HeadingProps, "level">;

export type Heading1Props = HProps<"h1">;
export const Heading1 = ({ ...props }: Heading1Props) => {
  return <Heading css={styles.h1} level={1} {...props} />;
};

export type Heading2Props = HProps<"h2">;
export const Heading2 = ({ ...props }: Heading2Props) => {
  return <Heading css={styles.h2} level={2} {...props} />;
};

export type Heading3Props = HProps<"h3">;
export const Heading3 = ({ ...props }: Heading3Props) => {
  return <Heading css={styles.h3} level={3} {...props} />;
};

export type Heading4Props = HProps<"h4">;
export const Heading4 = ({ ...props }: Heading4Props) => {
  return <Heading css={styles.h4} level={4} {...props} />;
};

export type Heading5Props = HProps<"h5">;
export const Heading5 = ({ ...props }: Heading5Props) => {
  return <Heading css={styles.h5} level={5} {...props} />;
};

export type Heading6Props = HProps<"h6">;
export const Heading6 = ({ ...props }: Heading6Props) => {
  return <Heading css={styles.h6} level={6} {...props} />;
};

export type ParagraphProps = ComponentProps<"p"> & Omit<TextProps<"p">, "elementType">;
export const Paragraph = ({ size, ...props }: ParagraphProps) => {
  return <Text elementType={"p"} css={styles.p({ size })} {...props} />;
};

const styles = {
  h1: css({
    fontSize: fontSizes.heading.l,
    fontWeight: fontWeights.semibold,
    lineHeight: "2.5rem",
  }),
  h2: css({
    fontSize: fontSizes.heading.m,
    fontWeight: fontWeights.semibold,
    lineHeight: "2.25rem",
  }),
  h3: css({
    fontSize: fontSizes.heading.s,
    fontWeight: fontWeights.semibold,
    lineHeight: "2rem",
  }),
  h4: css({
    fontSize: fontSizes.title.l,
    fontWeight: fontWeights.semibold,
    lineHeight: "1.75rem",
  }),
  h5: css({
    fontSize: fontSizes.title.m,
    fontWeight: fontWeights.semibold,
    lineHeight: "1.5rem",
  }),
  h6: css({
    fontSize: fontSizes.title.s,
    fontWeight: fontWeights.semibold,
    lineHeight: "1.25rem",
  }),
  p: ({ size = "m" }: Pick<ParagraphProps, "size">) =>
    css({
      fontSize: fontSizes.body[size],
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights[size],
    }),
};
