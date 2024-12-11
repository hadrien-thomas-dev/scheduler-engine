import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: [
      "src/**/*.ts"
    ]
  },
  {
    ignores: [
      ".stryker-tmp/",
      "node_modules/",
      "dist/",
      "coverage/",

    ]
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];