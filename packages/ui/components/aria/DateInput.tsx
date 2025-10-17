/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { DateInputProps as AriaDateInputProps } from "react-aria-components";
import { DateInput as AriaDateInput } from "react-aria-components";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";

export interface DateInputProps extends AriaDateInputProps {
  //
}

export const DateInput = (props: DateInputProps) => {
  return <AriaDateInput css={styles.input} {...props} />;
};

const styles = {
  input: css({
    background: themed("--field-background"),
    border: `solid 1px ${themed("--border-colour")}`,
    borderRadius: border.radius.m,
    display: "flex",
    forcedColorAdjust: "none",
    minWidth: "150px",
    padding: spacing.xxs,
    whiteSpace: "nowrap",
    width: "fit-content",

    "&[data-focus-within]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-1px",
    },
  }),
};
