/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { GroupProps as AriaGroupProps } from "react-aria-components";
import { Group as AriaGroup } from "react-aria-components";

export interface GroupProps extends AriaGroupProps {
  //
}

export const Group = ({ ...props }: GroupProps) => {
  return <AriaGroup css={styles.group} {...props} />;
};

const styles = {
  group: css({
    //
  }),
};
