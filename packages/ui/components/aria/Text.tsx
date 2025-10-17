/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ComponentProps } from "react";
import type { TextProps as AriaTextProps } from "react-aria-components";
import { Text as AriaText } from "react-aria-components";

import { fontSizes, fontWeights } from "../../tokens/typography";

export type TextKind = "p" | "span" | "strong" | "small" | "em";

export type TextSize = keyof typeof fontSizes.body;
export type TextWeight = keyof typeof fontWeights;

export type TextProps<T extends TextKind> = AriaTextProps &
  ComponentProps<T> & {
    element?: T;
    size?: TextSize;
    weight?: TextWeight;
  };

export const Text = <T extends TextKind>({ element, size, weight, ...props }: TextProps<T>) => {
  return <AriaText css={[styles.text, styles.element(element), styles.size(size), styles.weight(weight)]} {...props} />;
};

const styles = {
  text: css({
    color: "inherit",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
    margin: "unset",
  }),
  element: (kind?: TextKind) => {
    switch (kind) {
      case "strong":
        return css({
          fontWeight: fontWeights.bold,
        });
      case "small":
        return css({
          fontSize: fontSizes.body.s,
        });
      case "em":
        return css({
          fontStyle: "italic",
        });
      default:
      case "span":
        return;
    }
  },
  size: (size?: TextSize) => {
    if (!size) {
      return;
    }

    return css({
      fontSize: fontSizes.body[size],
    });
  },
  weight: (weight?: TextWeight) => {
    if (!weight) {
      return;
    }

    return css({
      fontWeight: fontWeights[weight],
    });
  },
};
