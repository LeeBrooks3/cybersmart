import "./preview.css";

import { css } from "@emotion/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import { ThemeProvider } from "../components/ThemeProvider";
import { colorSchemes } from "../tokens/colours";

const dark = colorSchemes.dark["--neutral-background-primary"];
const light = colorSchemes.light["--neutral-background-primary"];

const preview: Preview = {
  decorators: [
    (Story, { globals }) => {
      const theme =
        globals.backgrounds?.value === dark ? "dark" : globals.backgrounds?.value === light ? "light" : undefined;

      return (
        <ThemeProvider defaultTheme={theme}>
          <Story
            css={css({
              fontFamily: `"Nunito Sans", serif`,
              fontOpticalSizing: "auto",
              fontWeight: 400,
              fontStyle: "normal",
              fontVariationSettings: `"wdth" 100`,
            })}
          />
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    backgrounds: {
      grid: {
        cellAmount: 4,
        cellSize: 16,
      },
      values: [
        { name: "Dark", value: dark },
        { name: "Light", value: light },
      ],
    },
    docs: {
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? themes.dark : themes.light,
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Design System",
          ["Design Tokens", "Platform Scale", "Typography"],
          "components",
          "Development",
          ["Changelog"],
        ],
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "desktop",
    },
  },
};

export default preview;
