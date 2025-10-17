/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Moon, Sun } from "../icons";
import type { Theme } from "../tokens/theme";
import { Text } from "./aria/Text";
import type { ToggleButtonProps } from "./aria/ToggleButton";
import { ToggleButton } from "./aria/ToggleButton";
import { ToggleButtonGroup } from "./aria/ToggleButtonGroup";
import { Icon } from "./icons/Icon";
import { useTheme } from "./ThemeProvider";

export interface ThemeSelectorProps {
  size?: ToggleButtonProps["size"];
  variant?: ToggleButtonProps["variant"];
}

export const ThemeSelector = ({ size, variant }: ThemeSelectorProps) => {
  const { theme, setSelectedTheme } = useTheme();

  return (
    <ToggleButtonGroup
      selectionMode={"single"}
      selectedKeys={theme?.selected ? [theme.selected] : ["default"]}
      onSelectionChange={(keys) => {
        if (!keys.size) {
          return;
        }

        const value = keys.values().next().value;

        setSelectedTheme(value && ["dark", "light"].includes(value as string) ? (value as Theme) : undefined);
      }}
    >
      <ToggleButton size={size} variant={variant} id={"light"}>
        <Icon icon={Sun} size={size} aria-label={"Light mode toggle button"} />
      </ToggleButton>
      <ToggleButton size={size} variant={variant} id={"default"} css={css({ flex: 1 })}>
        <Text>Default</Text>
      </ToggleButton>
      <ToggleButton size={size} variant={variant} id={"dark"}>
        <Icon icon={Moon} size={size} aria-label={"Dark mode toggle button"} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
