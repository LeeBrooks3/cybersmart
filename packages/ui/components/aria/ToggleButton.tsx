/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ToggleButtonProps as AriaToggleButtonProps } from "react-aria-components";
import { ToggleButton as AriaToggleButton } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import type { ButtonSize, ButtonVariant } from "./Button";
import { buttonStyles } from "./Button";

export interface ToggleButtonProps extends AriaToggleButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export function ToggleButton({ size, variant, ...props }: ToggleButtonProps) {
  return <AriaToggleButton css={[buttonStyles({ size, variant }), styles.toggleButton]} {...props} />;
}

const styles = {
  toggleButton: css({
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.s,
    forcedColorAdjust: "none",

    "&[data-selected]": {
      background: themed("--highlight-bg-selected"),
      borderColor: themed("--highlight-bg-selected"),
      color: themed("--highlight-colour-selected"),

      "&[data-pressed]": {
        background: themed("--highlight-bg-selected-pressed"),
        borderColor: themed("--highlight-bg-selected-pressed"),
      },
    },
  }),
};
