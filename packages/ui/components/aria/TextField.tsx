/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { TextFieldProps as AriaTextFieldProps, ValidationResult } from "react-aria-components";
import { TextField as AriaTextField } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { FieldError } from "./FieldError";
import { Input } from "./Input";
import { Label } from "./Label";
import { Text } from "./Text";

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TextField({ label, description, errorMessage, ...props }: TextFieldProps) {
  return (
    <AriaTextField css={styles.field} {...props}>
      <Label>{label}</Label>
      <Input />
      {description && (
        <Text size={"s"} slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}

const styles = {
  field: css({
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxs,
  }),
};
