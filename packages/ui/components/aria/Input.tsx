/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { InputProps as AriaInputProps } from "react-aria-components";
import { Input as AriaInput } from "react-aria-components";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import { fontWeights } from "../../tokens/typography";

export interface InputProps extends AriaInputProps {
  //
}

export const Input = (props: InputProps) => {
  return <AriaInput css={styles.input} {...props} />;
};

const styles = {
  input: css({
    background: themed("--field-background"),
    border: `solid 1px ${themed("--border-colour")}`,
    borderRadius: border.radius.m,
    color: themed("--field-text-colour"),
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: fontWeights.normal,
    lineHeight: "1.25rem",
    margin: "0",
    padding: spacing.xs,
    verticalAlign: "middle",

    "&::placeholder": {
      color: themed("--text-colour-placeholder"),
      opacity: 1,
    },
    "&[data-disabled]": {
      borderColor: themed("--border-colour-disabled"),
      color: themed("--text-colour-disabled"),
    },
    "&[data-focused]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-1px",
    },
    "&[data-invalid]": {
      borderColor: themed("--invalid-colour"),
    },
  }),
};
