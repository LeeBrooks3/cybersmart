/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type {
  DialogProps as AriaDialogProps,
  DialogTriggerProps as AriaDialogTriggerProps,
} from "react-aria-components";
import { Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger } from "react-aria-components";

import { spacing } from "../../tokens/spacing";

export interface DialogProps extends AriaDialogProps {
  //
}

export function Dialog(props: DialogProps) {
  return <AriaDialog css={styles.dialog} {...props} />;
}

export interface DialogTriggerProps extends AriaDialogTriggerProps {
  //
}

export function DialogTrigger(props: DialogTriggerProps) {
  return <AriaDialogTrigger {...props} />;
}

const styles = {
  dialog: css({
    boxSizing: "border-box",
    maxHeight: "inherit",
    outline: "none",
    overflow: "auto",
    padding: spacing.m,

    "[slot=title]": {
      lineHeight: "1em",
      marginTop: "0",
    },
  }),
};
