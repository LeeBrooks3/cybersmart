/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { FieldErrorProps as AriaFieldErrorProps } from "react-aria-components";
import { FieldError as AriaFieldError } from "react-aria-components";

import { themed } from "../../tokens/theme";
import { fontSizes } from "../../tokens/typography";

export interface FieldErrorProps extends AriaFieldErrorProps {
  //
}

export const FieldError = (props: FieldErrorProps) => {
  return <AriaFieldError css={styles.fieldError} {...props} />;
};

const styles = {
  fieldError: css({
    color: themed("--invalid-colour"),
    fontSize: fontSizes.body.s,
  }),
};
