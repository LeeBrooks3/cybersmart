/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Minus, Plus } from "lucide-react";
import type { NumberFieldProps as AriaNumberFieldProps, ValidationResult } from "react-aria-components";
import { NumberField as AriaNumberField } from "react-aria-components";

import { border } from "../../tokens/border";
import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import { Icon } from "../icons/Icon";
import { Button } from "./Button";
import { FieldError } from "./FieldError";
import { Group } from "./Group";
import { Input } from "./Input";
import { Label } from "./Label";
import { Text } from "./Text";

export interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function NumberField({ label, description, errorMessage, ...props }: NumberFieldProps) {
  return (
    <AriaNumberField css={styles.field} {...props}>
      <Label>{label}</Label>
      <Group css={styles.group}>
        <Button css={styles.button} slot="decrement">
          <Icon icon={Minus} />
        </Button>
        <Input css={styles.input} slot={"input"} />
        <Button css={styles.button} slot="increment">
          <Icon icon={Plus} />
        </Button>
      </Group>
      {description && (
        <Text size={"s"} slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaNumberField>
  );
}

const styles = {
  field: css({
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxs,

    "&[data-invalid]": {
      "[slot=decrement], [slot=increment], [slot=input]": {
        borderColor: themed("--invalid-colour"),
      },
      "&:focus-within": {
        "[slot=decrement], [slot=increment], [slot=input]": {
          borderColor: themed("--focus-ring-colour"),
        },
      },
    },
  }),
  group: css({
    display: "flex",
    width: "fit-content",
    borderRadius: border.radius.m,
    "&[data-focus-within]": {
      outline: `1px solid ${themed("--focus-ring-colour")}`,
      "[slot=decrement], [slot=increment], [slot=input]": {
        borderColor: themed("--focus-ring-colour"),
      },
    },
  }),
  button: css({
    padding: spacing.xs,
    "&[slot=decrement]": {
      borderStartEndRadius: "0",
      borderEndEndRadius: "0",
    },
    "&[slot=increment]": {
      borderStartStartRadius: "0",
      borderEndStartRadius: "0",
    },
    "&[data-disabled]": {
      borderColor: themed("--border-colour-disabled"),
      color: themed("--text-colour-disabled"),
    },
  }),
  input: css({
    borderRadius: "unset",
    flex: 1,
    margin: "0 -1px",
    zIndex: 1,
  }),
};
