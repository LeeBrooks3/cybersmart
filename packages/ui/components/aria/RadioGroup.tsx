/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ReactNode } from "react";
import type { RadioGroupProps as AriaRadioGroupProps, ValidationResult } from "react-aria-components";
import { RadioGroup as AriaRadioGroup } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { FieldError } from "./FieldError";
import { Label } from "./Label";
import { Text } from "./Text";

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
  children?: ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function RadioGroup({ label, description, errorMessage, children, ...props }: RadioGroupProps) {
  return (
    <AriaRadioGroup css={styles.group} {...props}>
      <Label>{label}</Label>
      {children}
      {description && (
        <Text size={"s"} slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaRadioGroup>
  );
}

const styles = {
  group: css({
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,

    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center",
    },
  }),
};
