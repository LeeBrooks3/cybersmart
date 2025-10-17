/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { RadioProps as AriaRadioProps } from "react-aria-components";
import { Radio as AriaRadio } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";

export interface RadioProps extends AriaRadioProps {
  //
}

export const Radio = (props: RadioProps) => {
  return <AriaRadio css={styles.radio} {...props} />;
};

const styles = {
  radio: css({
    alignItems: "center",
    display: "flex",
    forcedColorAdjust: "none",
    gap: spacing.s,

    "&:before": {
      background: themed("--field-background"),
      border: `2px solid ${themed("--border-colour")}`,
      borderRadius: "50%",
      boxSizing: "border-box",
      content: "''",
      display: "block",
      height: "1.25rem",
      transition: "all 200ms",
      width: "1.25rem",
    },
    "&[data-disabled]": {
      color: themed("--text-colour-disabled"),

      "&:before": {
        borderColor: themed("--border-colour-disabled"),
      },
    },
    "&[data-focus-visible]:before": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
      outlineOffset: "2px",
    },
    "&[data-invalid]": {
      "&:before": {
        borderColor: themed("--invalid-colour"),
      },
      "&[data-pressed]:before": {
        borderColor: themed("--border-colour-pressed"),
      },
    },
    "&[data-pressed]:before": {
      borderColor: themed("--border-colour-pressed"),
    },
    "&[data-selected]": {
      "&:before": {
        borderColor: themed("--highlight-bg-selected"),
        borderWidth: "0.375rem",
      },
      "&[data-pressed]:before": {
        borderColor: themed("--highlight-bg-selected-pressed"),
      },
    },
  }),
};
