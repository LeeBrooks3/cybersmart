/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CalendarDays } from "lucide-react";
import type { DatePickerProps as AriaDatePickerProps, DateValue, ValidationResult } from "react-aria-components";
import { DatePicker as AriaDatePicker } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import { Icon } from "../icons/Icon";
import { Button } from "./Button";
import { Calendar } from "./Calendar";
import { DateInput } from "./DateInput";
import { DateSegment } from "./DateSegment";
import { FieldError } from "./FieldError";
import { Group } from "./Group";
import { Label } from "./Label";
import { Popover } from "./Popover";
import { Text } from "./Text";

export interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  firstDayOfWeek,
  ...props
}: DatePickerProps<T>) {
  return (
    <AriaDatePicker css={styles.datePicker} {...props}>
      <Label>{label}</Label>
      <Group css={styles.group}>
        <DateInput slot="input">{(segment) => <DateSegment segment={segment} />}</DateInput>
        <Button css={styles.button} size={"s"} variant={"ghost"}>
          <Icon icon={CalendarDays} />
        </Button>
      </Group>
      {description && (
        <Text size={"s"} slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <Popover css={styles.popover}>
        <Calendar firstDayOfWeek={firstDayOfWeek} />
      </Popover>
    </AriaDatePicker>
  );
}

const styles = {
  datePicker: css({
    //
  }),
  group: css({
    alignItems: "center",
    display: "flex",
    position: "relative",
  }),
  button: css({
    border: "none",
    padding: spacing.xxs,
    position: "absolute",
    right: "0.375rem",

    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "2px",
    },
  }),
  popover: css({
    "&[data-trigger=DatePicker]": {
      maxWidth: "unset",
    },
  }),
};
