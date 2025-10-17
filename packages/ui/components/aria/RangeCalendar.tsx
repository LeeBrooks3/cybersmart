/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { DateValue, RangeCalendarProps as AriaRangeCalendarProps } from "react-aria-components";
import { RangeCalendar as AriaRangeCalendar } from "react-aria-components";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import { Icon } from "../icons/Icon";
import { Button } from "./Button";
import { CalendarCell, CalendarGrid } from "./Calendar";
import { Header } from "./Header";
import { Heading } from "./Heading";
import { Text } from "./Text";

export interface RangeCalendarProps<T extends DateValue> extends AriaRangeCalendarProps<T> {
  errorMessage?: string;
}

export function RangeCalendar<T extends DateValue>({ errorMessage, ...props }: RangeCalendarProps<T>) {
  return (
    <AriaRangeCalendar css={styles.rangeCalendar} {...props}>
      <Header css={styles.header}>
        <Button css={styles.button} slot="previous" size={"s"} variant={"ghost"}>
          <Icon icon={ChevronLeft} />
        </Button>
        <Heading css={styles.heading} />
        <Button css={styles.button} slot="next" size={"s"} variant={"ghost"}>
          <Icon icon={ChevronRight} />
        </Button>
      </Header>
      <CalendarGrid>{(date) => <CalendarCell css={styles.cell} date={date} />}</CalendarGrid>
      {errorMessage && (
        <Text css={styles.errorMessage} slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </AriaRangeCalendar>
  );
}

const styles = {
  rangeCalendar: css({
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
    margin: 0,
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
  cell: css({
    "&[data-selected]": {
      borderRadius: 0,
    },
    "&[data-selection-end]": {
      borderStartEndRadius: border.radius.m,
      borderEndEndRadius: border.radius.m,
    },
    "&[data-selection-start]": {
      borderStartStartRadius: border.radius.m,
      borderEndStartRadius: border.radius.m,
    },
  }),
  errorMessage: {
    fontSize: "12px",
    color: themed("--invalid-colour"),
  },
};
