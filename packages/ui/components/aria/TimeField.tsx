/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { TimeFieldProps as AriaTimeFieldProps, TimeValue, ValidationResult } from "react-aria-components";
import { TimeField as AriaTimeField } from "react-aria-components";

import { DateInput } from "./DateInput";
import { DateSegment } from "./DateSegment";
import { FieldError } from "./FieldError";
import { Label } from "./Label";
import { Text } from "./Text";

export interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TimeField<T extends TimeValue>({ label, description, errorMessage, ...props }: TimeFieldProps<T>) {
  return (
    <AriaTimeField css={styles.timeField} {...props}>
      <Label>{label}</Label>
      <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      {description && (
        <Text size={"s"} slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaTimeField>
  );
}

const styles = {
  timeField: css({
    //
  }),
};
