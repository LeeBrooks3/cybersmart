/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { LabelProps as AriaLabelProps } from "react-aria-components";
import { Label as AriaLabel } from "react-aria-components";

import type { fontSizes } from "../../tokens/typography";
import { fontWeights } from "../../tokens/typography";

export interface LabelProps extends AriaLabelProps {
  size?: keyof typeof fontSizes.label;
}

export const Label = (props: LabelProps) => {
  return <AriaLabel css={styles.label} {...props} />;
};

const styles = {
  label: css({
    fontWeight: fontWeights.medium,
  }),
};
