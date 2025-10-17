/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type {
  TagGroupProps as AriaTagGroupProps,
  TagListProps as AriaTagListProps,
  TagProps as AriaTagProps,
} from "react-aria-components";
import { Tag as AriaTag, TagGroup as AriaTagGroup, TagList as AriaTagList } from "react-aria-components";

import { themed } from "../../tokens/theme";
import { Button } from "./Button";
import { Label } from "./Label";
import { Text } from "./Text";

export interface TagGroupProps<T>
  extends Omit<AriaTagGroupProps, "children">,
    Pick<AriaTagListProps<T>, "items" | "children" | "renderEmptyState"> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export function TagGroup<T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: TagGroupProps<T>) {
  return (
    <AriaTagGroup css={styles.group} {...props}>
      <Label>{label}</Label>
      <TagList items={items} renderEmptyState={renderEmptyState}>
        {children}
      </TagList>
      {description && (
        <Text css={styles.description} slot="description">
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text css={styles.errorMessage} slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </AriaTagGroup>
  );
}

export interface TagListProps<T extends object> extends AriaTagListProps<T> {
  //
}

export function TagList<T extends object>(props: TagListProps<T>) {
  return <AriaTagList css={styles.list} {...props} />;
}

export interface TagProps extends AriaTagProps {
  //
}

export function Tag({ children, ...props }: TagProps) {
  const textValue = typeof children === "string" ? children : undefined;
  return (
    <AriaTag css={styles.tag} textValue={textValue} {...props}>
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && <Button slot="remove">ⓧ</Button>}
        </>
      )}
    </AriaTag>
  );
}

const styles = {
  group: css({
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    fontSize: "small",
    color: themed("--text-colour"),
  }),
  description: css({
    fontSize: "12px",
  }),
  errorMessage: css({
    fontSize: "12px",
    color: themed("--invalid-colour"),
  }),
  list: css({
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
  }),
  tag: css({
    color: themed("--text-colour"),
    border: `solid 1px ${themed("--border-colour")}`,
    forcedColorAdjust: "none",
    borderRadius: "4px",
    padding: "2px 8px",
    fontSize: "0.929rem",
    outline: "none",
    cursor: "default",
    display: "flex",
    alignItems: "center",
    transition: "border-color 200ms",
    "&[data-hovered]": {
      borderColor: themed("--border-colour-hover"),
    },
    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "2px",
    },
    "&[data-selected]": {
      borderColor: themed("--highlight-bg-selected"),
      background: themed("--highlight-bg-selected"),
      color: themed("--highlight-colour-selected"),
      "[slot=remove]": {
        color: "inherit",
        "&[data-pressed]": {
          background: themed("--highlight-bg-selected-pressed"),
        },
      },
    },
    "&[data-disabled]": {
      borderColor: themed("--border-colour-disabled"),
      color: themed("--text-colour-disabled"),
    },
    "&[data-href]": {
      textDecoration: "none",
      cursor: "pointer",
    },
    "[slot=remove]": {
      background: "none",
      border: "none",
      boxShadow: "none",
      padding: "0",
      marginLeft: "8px",
      color: themed("--link-colour"),
      transition: "color 200ms",
      outline: "none",
      fontSize: "0.95em",
      "&[data-hovered]": {
        color: themed("--link-colour-hover"),
      },
    },
  }),
};
