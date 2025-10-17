import { iconSizes } from "./icon";

export const deviceBreakpoints = {
  xs: "640px",
  s: "768px",
  m: "1024px",
  l: "1280px",
  xl: "1536px",
} as const;

export const deviceWidths = {
  xs: "40rem", // 640px
  s: "48rem", // 768px
  m: "64rem", // 1024px
  l: "80rem", // 1280px
  xl: "96rem", // 1536px
} as const;

export const deviceVariables = {
  fontSizeBase: "--font-size-base",
  iconSizeLarge: "--icon-size-large",
  iconSizeMedium: "--icon-size-medium",
  iconSizeSmall: "--icon-size-small",
} as const;

export type DeviceVariable = (typeof deviceVariables)[keyof typeof deviceVariables];

export const scaled = (key: DeviceVariable) => `var(${key})`;

export type Device = "desktop" | "mobile";

export const devices: Record<"desktop" | "mobile", Record<DeviceVariable, string | number>> = {
  desktop: {
    [deviceVariables.fontSizeBase]: "16px",
    [deviceVariables.iconSizeLarge]: `${iconSizes.l}px`,
    [deviceVariables.iconSizeMedium]: `${iconSizes.m}px`,
    [deviceVariables.iconSizeSmall]: `${iconSizes.s}px`,
  },
  mobile: {
    [deviceVariables.fontSizeBase]: "20px",
    [deviceVariables.iconSizeLarge]: `${iconSizes.l * 1.25}px`,
    [deviceVariables.iconSizeMedium]: `${iconSizes.m * 1.25}px`,
    [deviceVariables.iconSizeSmall]: `${iconSizes.s * 1.25}px`,
  },
};
