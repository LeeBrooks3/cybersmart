/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { LinkProps as AriaLinkProps } from "react-aria-components";
import { Link as AriaLink } from "react-aria-components";

import { colour } from "../../tokens/colours";
import { spacing } from "../../tokens/spacing";
import { themed, themeVariables } from "../../tokens/theme";
import { fontWeights } from "../../tokens/typography";
import { buttonStyles } from "./Button";

export type LinkColourScheme = "neutral" | "primary" | "secondary";
export type LinkVariant = "default" | "button" | "ghost";

export interface LinkProps extends AriaLinkProps {
  colourScheme?: LinkColourScheme;
  variant?: LinkVariant;
}

export function Link({ colourScheme = "primary", variant, ...props }: LinkProps) {
  return <AriaLink css={[styles.link({ colourScheme, variant })]} {...props} />;
}

const styles = {
  link: ({ colourScheme, variant }: { colourScheme?: LinkColourScheme; variant?: LinkVariant }) => {
    switch (variant) {
      case "button":
        return buttonStyles({ colourScheme, variant: "default" });
      case "ghost":
        return buttonStyles({ colourScheme, variant });
      case "default":
      default:
        return css(
          {
            alignItems: "center",
            color: themed("--link-colour"),
            cursor: "default",
            display: "inline-flex",
            gap: spacing.xs,
            fontWeight: fontWeights.medium,
            textDecoration: "none",
            transition: "all 200ms",
            outline: "none",
            position: "relative",

            "&[data-hovered]": {
              color: themed("--link-colour-hover"),
              textDecoration: "underline",
            },
            "&[data-pressed]": {
              color: themed("--link-colour-pressed"),
            },
            "&[data-disabled]": {
              cursor: "default",
              color: themed("--link-colour-disabled"),
            },
            "&[href]": {
              cursor: "pointer",
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
    }
  },
};
