/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { LucideIcon, LucideProps } from "lucide-react";
import type { SlotProps } from "react-aria-components";

import { scaled } from "../../tokens/devices";
import type { iconSizes } from "../../tokens/icon";

export type IconSize = keyof typeof iconSizes;

export interface IconProps extends LucideProps, SlotProps {
  icon: LucideIcon;
  size?: IconSize;
}

export const Icon = ({ icon, size = "m", ...props }: IconProps) => {
  const Element = icon;

  return <Element css={styles.icon({ size })} {...props} />;
};

const styles = {
  icon: ({ size }: { size: IconSize }) => {
    switch (size) {
      case "s":
        return css({
          height: scaled("--icon-size-small"),
          width: scaled("--icon-size-small"),
        });
      case "l":
        return css({
          height: scaled("--icon-size-large"),
          width: scaled("--icon-size-large"),
        });
      case "m":
      default:
        return css({
          height: scaled("--icon-size-medium"),
          width: scaled("--icon-size-medium"),
        });
    }
  },
};
