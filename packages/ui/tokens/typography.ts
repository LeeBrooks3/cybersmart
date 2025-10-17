import { themed } from "./theme";

export const fontFamilies = {
  mono: themed("--font-mono"), // IBM Plex Mono
  sans: themed("--font-sans"), // IBM Plex Sans
  serif: themed("--font-sans"), // IBM Plex Serif
};

export const fontSizes = {
  label: {
    xs: "0.625rem", // ~10px
    s: "0.6875rem", // ~11px
    m: "0.75rem", // ~12px
    l: "0.875rem", // ~14px
  },

  body: {
    s: "0.75rem", // ~12px
    m: "0.875rem", // ~14px
    l: "1rem", // ~16px
  },

  title: {
    s: "0.875rem", // ~14px
    m: "1rem", // ~16px
    l: "1.375rem", // ~22px
  },

  heading: {
    s: "1.5rem", // ~24px
    m: "1.75rem", // ~28px
    l: "2rem", // ~32px
  },
};

export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const lineHeights = {
  s: "1rem", // ~16px
  m: "1.25rem", // ~20px
  l: "1.5rem", // ~24px
};
