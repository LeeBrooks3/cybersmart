/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { HeadingProps as AriaHeadingProps } from "react-aria-components";
import { Heading as AriaHeading } from "react-aria-components";

import { themed } from "../../tokens/theme";
import { fontFamilies } from "../../tokens/typography";

export interface HeadingProps extends AriaHeadingProps {
  //
}

export const Heading = (props: HeadingProps) => {
  return <AriaHeading css={styles.heading} {...props} />;
};

const styles = {
  heading: css({
    color: themed("--text-colour"),
    fontFamily: fontFamilies.sans,
    margin: "unset",
  }),
};
