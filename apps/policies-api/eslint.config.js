import { config } from "@leebrooks3/eslint-config/base";

export default [
  ...config,
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": "warn",
    },
  },
];
