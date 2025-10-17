/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import type { ComboBoxProps as AriaComboBoxProps, ValidationResult } from "react-aria-components";
import { ComboBox as AriaComboBox } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import { Icon } from "../icons/Icon";
import { Button } from "./Button";
import { FieldError } from "./FieldError";
import { Input } from "./Input";
import { Label } from "./Label";
import type { ListBoxItemProps } from "./ListBox";
import { ListBox, ListBoxItem } from "./ListBox";
import { Popover } from "./Popover";
import { Text } from "./Text";

export interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, "children"> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children: ReactNode | ((item: T) => ReactNode);
}

export function ComboBox<T extends object>({ label, description, errorMessage, children, ...props }: ComboBoxProps<T>) {
  return (
    <AriaComboBox css={styles.comboBox} {...props}>
      <Label>{label}</Label>
      <div>
        <Input />
        <Button css={styles.button} size={"s"} variant={"ghost"}>
          <Icon icon={ChevronDown} />
        </Button>
      </div>
      {description && (
        <Text size={"s"} slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <Popover css={styles.popover}>
        <ListBox css={styles.listBox}>{children}</ListBox>
      </Popover>
    </AriaComboBox>
  );
}

export function ComboBoxItem(props: ListBoxItemProps) {
  return <ListBoxItem css={styles.item} {...props} />;
}

const styles = {
  comboBox: css({
    //
  }),
  button: css({
    border: "none",
    marginLeft: "-2.125rem",
    padding: spacing.xxs,
  }),
  popover: css({
    width: "var(--trigger-width)",

    "> [role=dialog]": {
      padding: 0,
    },
  }),
  listBox: css({
    display: "block",
    width: "unset",
    maxHeight: "inherit",
    minHeight: "unset",
    border: "none",
  }),
  item: css({
    paddingLeft: spacing.l,

    "&[data-focus-visible]": {
      outline: "none",
    },
    "&[data-selected]": {
      fontWeight: 600,
      background: "unset",
      color: themed("--text-colour"),
      "&::before": {
        content: ["'✓'", "'✓' / ''"],
        alt: "' '",
        position: "absolute",
        top: "4px",
        left: "4px",
      },
    },
    "&[data-focused], &[data-pressed]": {
      background: themed("--highlight-bg-selected"),
      color: themed("--highlight-colour-selected"),
    },
    "&[href]": {
      textDecoration: "none",
      cursor: "pointer",
    },
  }),
};
