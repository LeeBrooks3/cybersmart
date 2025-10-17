/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import type {
  SelectProps as AriaSelectProps,
  SelectValueProps as AriaSelectValueProps,
  ValidationResult,
} from "react-aria-components";
import { Select as AriaSelect, SelectValue as AriaSelectValue } from "react-aria-components";

import { themed } from "../../tokens/theme";
import { Icon } from "../icons/Icon";
import { Button } from "./Button";
import { FieldError } from "./FieldError";
import { Label } from "./Label";
import type { ListBoxItemProps } from "./ListBox";
import { ListBox, ListBoxItem } from "./ListBox";
import { Popover } from "./Popover";
import { Text } from "./Text";

export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: ReactNode | ((item: T) => ReactNode);
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect css={styles.select} {...props}>
      <Label>{label}</Label>
      <Button css={styles.button}>
        <SelectValue slot="value" />
        <Icon aria-hidden="true" icon={ChevronDown} />
      </Button>
      {description && (
        <Text size={"s"} slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <Popover css={styles.popover}>
        <ListBox css={styles.listBox} items={items}>
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export function SelectItem(props: ListBoxItemProps) {
  return <ListBoxItem css={styles.listBoxItem} {...props} />;
}

export interface SelectValueProps<T extends object> extends AriaSelectValueProps<T> {
  //
}

export function SelectValue<T extends object>(props: SelectValueProps<T>) {
  return <AriaSelectValue css={styles.value} {...props} />;
}

const styles = {
  select: css({
    //
  }),
  button: css({
    display: "flex",

    "&[data-disabled]": {
      "[slot=value]": {
        "&[data-placeholder]": {
          color: themed("--text-colour-disabled"),
        },
      },
    },
  }),
  value: css({
    "&[data-placeholder]": {
      fontStyle: "italic",
      color: themed("--text-colour-placeholder"),
    },
    "[slot=description]": {
      display: "none",
    },
  }),
  popover: css({
    "&[data-trigger=Select]": {
      minWidth: "var(--trigger-width)",
    },
    " > [role=dialog]": {
      padding: "0",
    },
  }),
  listBox: css({
    display: "block",
    width: "unset",
    maxHeight: "inherit",
    minHeight: "unset",
    border: "none",
  }),
  listBoxItem: css({
    //
  }),
};
