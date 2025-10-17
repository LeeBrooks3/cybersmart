/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ToggleButtonGroupProps } from "react-aria-components";
import { ToggleButtonGroup as AriaToggleButtonGroup } from "react-aria-components";

import { border } from "../../tokens/border";

export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  return <AriaToggleButtonGroup css={styles.group} {...props} />;
}

const styles = {
  group: css({
    display: "flex",
    "> button": {
      borderRadius: 0,
      zIndex: 1,
      "&[data-disabled]": {
        zIndex: 0,
      },
      "&[data-selected],\n    &[data-focus-visible]": {
        zIndex: 2,
      },
    },

    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      "> button": {
        marginInlineStart: "-1px",
        "&:first-of-type": {
          borderTopLeftRadius: border.radius.m,
          borderBottomLeftRadius: border.radius.m,
          marginInlineStart: "0",
        },
        "&:last-of-type": {
          borderTopRightRadius: border.radius.m,
          borderBottomRightRadius: border.radius.m,
        },
      },
    },
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      width: "fit-content",
      "> button": {
        marginBlockStart: "-1px",
        "&:first-of-type": {
          borderTopLeftRadius: border.radius.m,
          borderTopRightRadius: border.radius.m,
          marginBlockStart: "0",
        },
        "&:last-of-type": {
          borderBottomLeftRadius: border.radius.m,
          borderBottomRightRadius: border.radius.m,
        },
      },
    },
  }),
};
