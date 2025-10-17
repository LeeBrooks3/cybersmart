/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ReactNode } from "react";
import type { CheckboxGroupProps as AriaCheckboxGroupProps, ValidationResult } from "react-aria-components";
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { FieldError } from "./FieldError";
import { Label } from "./Label";
import { Text } from "./Text";

export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, "children"> {
  children?: ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function CheckboxGroup({ label, description, errorMessage, children, ...props }: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup css={styles.checkboxGroup} {...props}>
      {label && <Label>{label}</Label>}
      {children}
      {description && (
        <Text size={"s"} slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaCheckboxGroup>
  );
}

const styles = {
  checkboxGroup: css({
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
  }),
};
