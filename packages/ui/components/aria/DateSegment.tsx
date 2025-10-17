/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { DateSegmentProps as AriaDateSegmentProps } from "react-aria-components";
import { DateSegment as AriaDateSegment } from "react-aria-components";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";

export interface DateSegmentProps extends AriaDateSegmentProps {
  //
}

export const DateSegment = (props: DateSegmentProps) => {
  return <AriaDateSegment css={styles.segment} {...props} />;
};

const styles = {
  segment: css({
    borderRadius: border.radius.m,
    cursor: "default",
    fontVariantNumeric: "tabular-nums",
    textAlign: "end",
    padding: spacing.xxs,

    "&:hover": {
      background: themed("--highlight-bg-hover"),
    },
    "&:active": {
      background: themed("--highlight-bg-pressed"),
    },
    "&:focus": {
      background: themed("--highlight-bg-selected"),
      caretColor: "transparent",
      color: themed("--highlight-colour-selected"),
      outline: "none",
    },
    "&[data-invalid]": {
      color: themed("--invalid-colour"),

      "&:focus": {
        background: themed("--highlight-bg-selected-invalid"),
        color: themed("--highlight-colour-selected"),
      },
    },
    "&[data-placeholder]": {
      color: themed("--text-colour-placeholder"),
      fontStyle: "italic",
    },
    "&[data-type=literal]": {
      padding: `${spacing.xxs} 0`,

      "&:hover, &:active, &:focus": {
        background: "unset",
      },
    },
  }),
};
