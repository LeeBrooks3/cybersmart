/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { DateFieldProps as AriaDateFieldProps, DateValue, ValidationResult } from "react-aria-components";
import { DateField as AriaDateField } from "react-aria-components";

import { DateInput } from "./DateInput";
import { DateSegment } from "./DateSegment";
import { FieldError } from "./FieldError";
import { Label } from "./Label";
import { Text } from "./Text";

export interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateField<T extends DateValue>({ label, description, errorMessage, ...props }: DateFieldProps<T>) {
  return (
    <AriaDateField css={styles.dateField} {...props}>
      <Label>{label}</Label>
      <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      {description && (
        <Text size={"s"} slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaDateField>
  );
}

const styles = {
  dateField: css({
    //
  }),
};
