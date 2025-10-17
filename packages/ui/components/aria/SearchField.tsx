/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Search, X } from "lucide-react";
import type { SearchFieldProps as AriaSearchFieldProps, ValidationResult } from "react-aria-components";
import { SearchField as AriaSearchField } from "react-aria-components";

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

export interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

export function SearchField({ label, description, errorMessage, placeholder, ...props }: SearchFieldProps) {
  return (
    <AriaSearchField css={styles.field} {...props}>
      {label && <Label>{label}</Label>}
      <Group css={styles.group}>
        <Button css={styles.searchButton} slot={"button"}>
          <Icon icon={Search} slot={"icon"} />
        </Button>
        <Input css={styles.input} placeholder={placeholder} slot={"input"} />
        <Button css={styles.clearButton} variant={"ghost"} size={"s"} slot={"clear"}>
          <Icon icon={X} />
        </Button>
      </Group>
      {description && (
        <Text size={"s"} slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaSearchField>
  );
}

const styles = {
  field: css({
    width: "fit-content",

    "&[data-empty] [slot=clear]": {
      display: "none",
    },
  }),
  group: css({
    alignItems: "center",
    borderRadius: border.radius.m,
    display: "flex",
    position: "relative",

    "&[data-focus-within]": {
      outline: `1px solid ${themed("--focus-ring-colour")}`,

      "[slot=button], [slot=input]": {
        borderColor: themed("--focus-ring-colour"),
      },
    },
  }),
  searchButton: css({
    borderStartEndRadius: "0",
    borderEndEndRadius: "0",
    padding: spacing.xs,
    transition: "border 0s",
  }),
  clearButton: css({
    border: "none",
    padding: spacing.xxs,
    position: "absolute",
    right: "0.375rem",
  }),
  input: css({
    borderEndStartRadius: "0",
    borderStartStartRadius: "0",
    marginLeft: "-1px",

    "&::-webkit-search-cancel-button, &::-webkit-search-decoration": {
      WebkitAppearance: "none",
    },
  }),
};
