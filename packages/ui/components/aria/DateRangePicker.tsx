/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CalendarRange } from "lucide-react";
import type {
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import { DateRangePicker as AriaDateRangePicker } from "react-aria-components";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import { Icon } from "../icons/Icon";
import { Button } from "./Button";
import { DateInput } from "./DateInput";
import { DateSegment } from "./DateSegment";
import { Dialog } from "./Dialog";
import { FieldError } from "./FieldError";
import { Group } from "./Group";
import { Label } from "./Label";
import { Popover } from "./Popover";
import { RangeCalendar } from "./RangeCalendar";
import { Text } from "./Text";

export interface DateRangePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  firstDayOfWeek,
  ...props
}: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker css={styles.dateRangePicker} {...props}>
      <Label>{label}</Label>
      <Group css={styles.group}>
        <DateInput css={styles.dateInput} slot="start">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <span aria-hidden="true">-</span>
        <DateInput css={styles.dateInput} slot="end">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <Button css={styles.button}>
          <Icon icon={CalendarRange} />
        </Button>
      </Group>
      {description && (
        <Text size={"s"} slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <Popover css={styles.popover}>
        <Dialog>
          <RangeCalendar firstDayOfWeek={firstDayOfWeek} />
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  );
}

const styles = {
  dateRangePicker: css({
    //
  }),
  group: css({
    alignItems: "center",
    background: themed("--field-background"),
    border: `1px solid ${themed("--border-colour")}`,
    borderRadius: border.radius.m,
    boxSizing: "border-box",
    display: "flex",
    gap: spacing.xxs,
    maxWidth: "100%",
    minWidth: "220px",
    overflow: "auto",
    padding: spacing.xxs,
    position: "relative",
    whiteSpace: "nowrap",
    width: "fit-content",

    "&[data-focus-within]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "-1px",
    },
  }),
  button: css({
    border: "none",
    padding: spacing.xxs,

    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "2px",
    },
  }),
  dateInput: css({
    width: "unset",
    minWidth: "unset",
    padding: "unset",
    border: "unset",
    outline: "unset",
    "&[data-focus-within]": {
      outline: "unset",
    },
  }),
  popover: css({
    "&[data-trigger=DateRangePicker]": {
      maxWidth: "unset",
    },
  }),
};
