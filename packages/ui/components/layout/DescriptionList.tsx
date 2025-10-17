/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ComponentProps } from "react";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import { fontWeights } from "../../tokens/typography";
import type { FlexProps } from "./Flex";
import { Flex } from "./Flex";

export interface DescriptionListProps extends ComponentProps<"dl"> {
  //
}

export const DescriptionList = ({ children, ...props }: DescriptionListProps) => {
  return (
    <dl css={styles.list} {...props}>
      {children}
    </dl>
  );
};

export interface DescriptionListItemProps extends FlexProps {
  //
}

export const DescriptionListItem = ({ children, ...props }: DescriptionListItemProps) => {
  return (
    <Flex css={styles.item} {...props}>
      {children}
    </Flex>
  );
};

export interface DescriptionListItemTermProps extends ComponentProps<"dt"> {
  //
}

export const DescriptionListItemTerm = ({ children, ...props }: DescriptionListItemTermProps) => {
  return (
    <dt css={styles.term} {...props}>
      {children}
    </dt>
  );
};

export interface DescriptionListItemDefinitionProps extends ComponentProps<"dd"> {
  //
}

export const DescriptionListItemDefinition = ({ children, ...props }: DescriptionListItemDefinitionProps) => {
  return (
    <dd css={styles.definition} {...props}>
      {children}
    </dd>
  );
};

const styles = {
  list: css({
    border: `solid 1px ${themed("--border-colour")}`,
    borderRadius: border.radius.m,
    margin: "unset",
    overflow: "hidden",
  }),
  item: css({
    "&:last-of-type": {
      "dd:after, dt:after": {
        content: "unset",
      },
    },
  }),
  term: css({
    borderRight: `solid 1px ${themed("--border-colour")}`,
    boxSizing: "border-box",
    background: themed("--background-colour-secondary"),
    fontWeight: fontWeights.semibold,
    padding: `${spacing.s} ${spacing.m}`,
    position: "relative",
    width: "20rem",

    "&:after": {
      borderBottom: `solid 1px ${themed("--separator-colour")}`,
      bottom: 0,
      left: spacing.m,
      right: spacing.m,
      content: "''",
      display: `block`,
      position: "absolute",
    },
  }),
  definition: css({
    flexGrow: 1,
    margin: "unset",
    padding: `${spacing.s} ${spacing.m}`,
    position: "relative",

    "&:after": {
      borderBottom: `solid 1px ${themed("--separator-colour")}`,
      bottom: 0,
      left: spacing.m,
      right: spacing.m,
      content: "''",
      display: `block`,
      position: "absolute",
    },
  }),
};
