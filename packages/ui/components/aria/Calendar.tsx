/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type {
  CalendarCellProps as AriaCalendarCellProps,
  CalendarGridProps as AriaCalendarGridProps,
  CalendarProps as AriaCalendarProps,
  DateValue,
} from "react-aria-components";
import {
  Calendar as AriaCalendar,
  CalendarCell as AriaCalendarCell,
  CalendarGrid as AriaCalendarGrid,
} from "react-aria-components";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import { Icon } from "../icons/Icon";
import { Button } from "./Button";
import { Header } from "./Header";
import { Heading } from "./Heading";
import { Text } from "./Text";

export interface CalendarProps<T extends DateValue> extends AriaCalendarProps<T> {
  errorMessage?: string;
}

export function Calendar<T extends DateValue>({ errorMessage, ...props }: CalendarProps<T>) {
  return (
    <AriaCalendar css={styles.calendar} {...props}>
      <Header css={styles.header}>
        <Button css={styles.button} slot="previous" size={"s"} variant={"ghost"}>
          <Icon icon={ChevronLeft} />
        </Button>
        <Heading css={styles.heading} />
        <Button css={styles.button} slot="next" size={"s"} variant={"ghost"}>
          <Icon icon={ChevronRight} />
        </Button>
      </Header>
      <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
      {errorMessage && (
        <Text css={styles.errorMessage} size={"s"} slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </AriaCalendar>
  );
}

export interface CalendarGridProps extends AriaCalendarGridProps {
  //
}

export function CalendarGrid(props: CalendarGridProps) {
  return <AriaCalendarGrid css={styles.grid} {...props} />;
}

export interface CalendarCellProps extends AriaCalendarCellProps {
  //
}

export function CalendarCell(props: CalendarCellProps) {
  return <AriaCalendarCell css={styles.cell} {...props} />;
}

const styles = {
  calendar: css({
    maxWidth: "100%",
    width: "fit-content",
  }),
  header: css({
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: spacing.s,
    paddingBottom: spacing.xs,
  }),
  heading: css({
    flex: 1,
    margin: "0",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "1.5rem",
  }),
  button: css({
    height: "2rem",
    justifyContent: "center",
    padding: 0,
    width: "2rem",
  }),
  grid: css({
    borderCollapse: "collapse",
    borderSpacing: 0,

    td: {
      padding: `2px 0`,
    },
  }),
  cell: css({
    border: "none",
    borderRadius: border.radius.m,
    borderSpacing: 0,
    cursor: "pointer",
    forcedColorAdjust: "none",
    lineHeight: "2rem",
    outline: "none",
    textAlign: "center",
    width: "2rem",

    "&[data-disabled]": {
      color: themed("--text-colour-disabled"),
    },
    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "2px",
    },
    "&[data-invalid]": {
      background: themed("--highlight-bg-selected-invalid"),
      color: themed("--highlight-colour-selected"),
    },
    "&[data-outside-month]": {
      display: "none",
    },
    "&[data-hovered]": {
      background: themed("--highlight-bg-hover"),
    },
    "&[data-pressed]": {
      background: themed("--highlight-bg-pressed"),
    },
    "&[data-selected]": {
      background: themed("--highlight-bg-selected"),
      color: themed("--highlight-colour-selected"),

      "&[data-hovered]": {
        background: themed("--highlight-bg-selected-pressed"),
      },
      "&[data-pressed]": {
        background: themed("--highlight-bg-selected-pressed"),
      },
    },
    "&[data-unavailable]": {
      textDecoration: "line-through",
      color: themed("--invalid-colour"),
    },
  }),
  errorMessage: css({
    color: themed("--invalid-colour"),
  }),
};
