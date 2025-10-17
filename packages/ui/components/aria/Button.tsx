/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import { Button as AriaButton } from "react-aria-components";

import { border } from "../../tokens/border";
import { colour } from "../../tokens/colours";
import { spacing } from "../../tokens/spacing";
import { themed, themeVariables } from "../../tokens/theme";
import { fontFamilies, fontSizes, fontWeights } from "../../tokens/typography";

export type ButtonColourScheme = "neutral" | "primary" | "secondary";
export type ButtonSize = "s" | "m";
export type ButtonVariant = "default" | "ghost";

export interface ButtonProps extends AriaButtonProps {
  colourScheme?: ButtonColourScheme;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export function Button({ colourScheme, size, variant, ...props }: ButtonProps) {
  return <AriaButton css={[buttonStyles({ colourScheme, size, variant })]} {...props} />;
}

export const buttonStyles = ({
  colourScheme,
  size,
  variant,
}: {
  colourScheme?: ButtonColourScheme;
  size?: ButtonSize;
  variant?: ButtonVariant;
}) => [styles.button, buttonSizes(size), buttonVariants({ colourScheme, variant })];

export const buttonSizes = (size?: ButtonSize) => {
  switch (size) {
    case "s":
      return css({
        padding: `${spacing.xxs} ${spacing.xs}`,
      });
    case "m":
    default:
      return css({
        padding: `${spacing.xs} ${spacing.s}`,
      });
  }
};

export const buttonVariants = ({
  colourScheme,
  variant,
}: {
  colourScheme?: ButtonColourScheme;
  variant?: ButtonVariant;
}) => {
  switch (variant) {
    case "ghost":
      return css(
        {
          background: "transparent",
          border: "1px solid transparent",
          color: themed("--link-colour"),
          transition: "all 200ms",

          "&[data-disabled]": {
            color: themed("--text-colour-disabled"),
          },
          "&[data-hovered]": {
            background: themed("--highlight-bg-hover"),
            color: themed("--link-colour-hover"),
          },
          "&[data-pressed]": {
            background: themed("--highlight-bg-pressed"),
            color: themed("--link-colour-pressed"),
          },
          "&[data-selected=true]": {
            background: themed("--highlight-bg-selected"),
            color: themed("--highlight-colour-selected"),
          },
        },
        colourScheme === "primary" && {
          [themeVariables.linkColourDisabled]: colour("--primary-colour-disabled"),
          [themeVariables.linkColour]: colour("--primary-colour"),
          [themeVariables.linkColourHover]: colour("--primary-colour-hover"),
          [themeVariables.linkColourPressed]: colour("--primary-colour-pressed"),
        },
        colourScheme === "secondary" && {
          [themeVariables.linkColourDisabled]: colour("--secondary-colour-disabled"),
          [themeVariables.linkColour]: colour("--secondary-colour"),
          [themeVariables.linkColourHover]: colour("--secondary-colour-hover"),
          [themeVariables.linkColourPressed]: colour("--secondary-colour-pressed"),
        },
      );
    case "default":
    default:
      return css(
        {
          background: themed("--button-background"),
          border: `1px solid ${themed("--border-colour")}`,
          color: themed("--text-colour"),
          transition: "all 200ms",

          "&[data-disabled]": {
            borderColor: themed("--border-colour-disabled"),
            color: themed("--text-colour-disabled"),
          },
          "&[data-hovered]": {
            background: themed("--button-background-hover"),
            borderColor: themed("--border-colour-hover"),
          },
          "&[data-pressed]": {
            background: themed("--button-background-pressed"),
            borderColor: themed("--border-colour-pressed"),
          },
          "&[data-selected=true]": {
            background: themed("--highlight-bg-selected"),
            borderColor: themed("--highlight-bg-selected"),
            color: themed("--highlight-colour-selected"),

            "&[data-pressed]": {
              background: themed("--highlight-bg-selected-pressed"),
              borderColor: themed("--highlight-bg-selected-pressed"),
            },
          },
        },
        colourScheme === "primary" && {
          color: themed("--highlight-colour-selected"),
          borderColor: "transparent",

          "&[data-disabled]": {
            borderColor: "transparent",
          },
          "&[data-hovered]": {
            borderColor: "transparent",
          },
          "&[data-pressed]": {
            borderColor: "transparent",
          },

          [themeVariables.buttonBackgroundColourDisabled]: colour("--primary-colour-disabled"),
          [themeVariables.buttonBackgroundColour]: colour("--primary-colour"),
          [themeVariables.buttonBackgroundColourHover]: colour("--primary-colour-hover"),
          [themeVariables.buttonBackgroundColourPressed]: colour("--primary-colour-pressed"),
        },
        colourScheme === "secondary" && {
          color: themed("--highlight-colour-selected"),
          borderColor: "transparent",

          "&[data-disabled]": {
            borderColor: "transparent",
          },
          "&[data-hovered]": {
            borderColor: "transparent",
          },
          "&[data-pressed]": {
            borderColor: "transparent",
          },

          [themeVariables.buttonBackgroundColourDisabled]: colour("--secondary-colour-disabled"),
          [themeVariables.buttonBackgroundColour]: colour("--secondary-colour"),
          [themeVariables.buttonBackgroundColourHover]: colour("--secondary-colour-hover"),
          [themeVariables.buttonBackgroundColourPressed]: colour("--secondary-colour-pressed"),
        },
      );
  }
};

const styles = {
  button: css({
    alignItems: "center",
    appearance: "none",
    borderRadius: border.radius.m,
    cursor: "pointer",
    display: "inline-flex",
    flexDirection: "row",
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.body.m,
    fontWeight: fontWeights.medium,
    gap: spacing.s,
    lineHeight: "1.25rem",
    margin: "0",
    outline: "none",
    textAlign: "center",
    textDecoration: "none",
    verticalAlign: "middle",

    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-1px",
    },
  }),
};
