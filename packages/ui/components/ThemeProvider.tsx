/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import type { PropsWithChildren } from "react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { colorSchemes } from "../tokens/colours";
import { devices, scaled } from "../tokens/devices";
import type { Theme } from "../tokens/theme";
import { themed, themes } from "../tokens/theme";
import { fontSizes, fontWeights, lineHeights } from "../tokens/typography";

export interface ThemeContext {
  theme?: {
    preferred?: Theme;
    selected?: Theme;
  };
  setSelectedTheme: (theme?: Theme) => void;
}

export const ThemeContext = createContext<ThemeContext>({
  setSelectedTheme: () => {},
});

export const useTheme = () => {
  const { theme, setSelectedTheme } = useContext(ThemeContext);

  return {
    theme: {
      ...theme,
      active: theme?.selected ?? theme?.preferred ?? "light",
    },
    setSelectedTheme,
  };
};

export interface ThemeProviderProps extends PropsWithChildren {
  defaultTheme?: Theme;
}

export const ThemeProvider = ({ children, defaultTheme }: ThemeProviderProps) => {
  const [preferredTheme, setPreferredTheme] = useState<Theme>();
  const [selectedTheme, setSelectedTheme] = useState(defaultTheme);

  const setPreferredThemeFromPreferredColourScheme = useCallback(
    (isDarkPreferred: boolean) => {
      const preference = isDarkPreferred ? "dark" : "light";

      if (preference !== preferredTheme) {
        setPreferredTheme(preference);
      }
    },
    [preferredTheme],
  );

  const theme = useMemo(() => {
    return selectedTheme ?? preferredTheme ?? defaultTheme ?? "default";
  }, [defaultTheme, preferredTheme, selectedTheme]);

  useEffect(() => {
    const watcher = window.matchMedia("(prefers-color-scheme: dark)");

    setPreferredThemeFromPreferredColourScheme(watcher.matches);

    const eventListener = (event: MediaQueryListEvent) => setPreferredThemeFromPreferredColourScheme(event.matches);

    watcher.addEventListener("change", eventListener);

    return () => {
      watcher.removeEventListener("change", eventListener);
    };
  }, [setPreferredThemeFromPreferredColourScheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: {
          selected: selectedTheme,
          preferred: preferredTheme,
        },
        setSelectedTheme,
      }}
    >
      <Global styles={[styles[theme], styles.theme]} />
      {children}
    </ThemeContext.Provider>
  );
};

const styles = {
  theme: css({
    ":root": {
      fontSize: scaled("--font-size-base"),
      ...themes.preferred,
    },
    body: {
      background: themed("--background-colour-secondary"),
      color: themed("--text-colour"),
      fontFamily: themed("--font-sans"),
      fontSize: fontSizes.body.m,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.m,
      margin: "unset",
      height: "100vh",
    },
    "@media screen and (min-width: 768px)": {
      ":root": devices.desktop,
    },
    "@media screen and (max-width: 768px)": {
      ":root": devices.mobile,
    },
    "@media (forced-colors: active)": {
      ":root": themes.forced,
    },
  }),
  light: css({
    ":root": colorSchemes.light,
  }),
  dark: css({
    ":root": colorSchemes.dark,
  }),
  default: css({
    ":root": colorSchemes.light,
    "@media (prefers-color-scheme: dark)": {
      ":root": colorSchemes.dark,
    },
  }),
};
