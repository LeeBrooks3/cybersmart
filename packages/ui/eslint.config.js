import { config } from "@leebrooks3/eslint-config/react";

export default [
  ...config,
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": "warn",
    },
  },
];
