/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type {
  BreadcrumbProps as AriaBreadcrumbProps,
  BreadcrumbsProps as AriaBreadcrumbsProps,
} from "react-aria-components";
import { Breadcrumb as AriaBreadcrumb, Breadcrumbs as AriaBreadcrumbs } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import { fontWeights } from "../../tokens/typography";
import type { LinkProps } from "./Link";
import { Link } from "./Link";

export type BreadcrumbsColourScheme = "neutral" | "primary";

export interface BreadcrumbsProps<T extends object> extends AriaBreadcrumbsProps<T> {
  colourScheme?: BreadcrumbsColourScheme;
}

export function Breadcrumbs<T extends object>({ colourScheme = "neutral", ...props }: BreadcrumbsProps<T>) {
  return <AriaBreadcrumbs css={styles.breadcrumbs({ colourScheme })} {...props} />;
}

export interface BreadcrumbProps extends AriaBreadcrumbProps {
  colourScheme?: BreadcrumbsColourScheme;
}

export function Breadcrumb(props: BreadcrumbProps) {
  return <AriaBreadcrumb css={styles.breadcrumb} {...props} />;
}

export interface BreadcrumbLinkProps extends LinkProps {
  colourScheme?: BreadcrumbsColourScheme;
}

export function BreadcrumbLink({ colourScheme = "neutral", ...props }: BreadcrumbLinkProps) {
  return <Link css={styles.link({ colourScheme })} colourScheme={colourScheme} {...props} />;
}

const styles = {
  breadcrumbs: ({ colourScheme }: { colourScheme?: BreadcrumbsColourScheme }) =>
    css({
      alignItems: "center",
      color: colourScheme === "primary" ? themed("--link-colour") : themed("--link-colour"),
      display: "flex",
      listStyle: "none",
      margin: "0",
      padding: "0",
    }),
  breadcrumb: css({
    display: "flex",
    flexDirection: "row",

    "&:not(:last-child)::after": {
      alt: "' '",
      content: ["'›'", "'›' / ''"],
      padding: `0 ${spacing.s}`,
    },
  }),
  link: ({ colourScheme }: { colourScheme?: BreadcrumbsColourScheme }) =>
    css({
      position: "relative",

      "&[data-current]": {
        fontWeight: fontWeights.semibold,
      },
      "&[data-disabled]": {
        color: colourScheme === "primary" ? themed("--link-colour-pressed") : themed("--link-colour-pressed"),
        cursor: "default",

        "&:not([data-current])": {
          color: colourScheme === "primary" ? themed("--link-colour-disabled") : themed("--link-colour-disabled"),
        },
      },
      "&[data-hovered]": {
        textDecoration: "underline",
      },
    }),
};
