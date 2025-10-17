/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { DisclosureGroupProps as AriaDisclosureGroupProps } from "react-aria-components";
import { DisclosureGroup as AriaDisclosureGroup } from "react-aria-components";

import { spacing } from "../../tokens/spacing";

export interface DisclosureGroupProps extends AriaDisclosureGroupProps {
  //
}

export function DisclosureGroup(props: DisclosureGroupProps) {
  return <AriaDisclosureGroup css={styles.group} {...props} />;
}

const styles = {
  group: css({
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
    padding: `${spacing.xs} ${spacing.s}`,
  }),
};
