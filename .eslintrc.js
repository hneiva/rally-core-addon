module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    webextensions: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/warnings",
    "plugin:node/recommended",
  ],
  globals: {
    ChromeUtils: false,
    ExtensionAPI: false,
    // NOTE: These get injected via Rollup.
    __API_ENDPOINT__: false,
    __ION_STUDIES_LIST__: false,
    __ION_WEBSITE_URL__: false,
    __STORE_IMPLEMENTATION__: false,
  },
  overrides: [
    {
      files: "tests/**",
      env: {
        mocha: true,
      },
      extends: [
        "plugin:mocha/recommended",
      ],
    },
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: [
    "import",
    "mocha",
    "node",
    "svelte3",
  ],
  root: true,
  rules: {
    "node/no-deprecated-api": "error",
    "node/no-extraneous-require": "off",
    "node/no-missing-import": "off",
    "node/no-unpublished-import": "off",
    "node/no-unpublished-require": "off",
    "node/no-unsupported-features/es-syntax": "off",

    "no-unused-vars": [ "error", { vars: "all", args: "none", ignoreRestSiblings: false } ],
    "no-var": "off", // TODO: "warn",
    "prefer-const": "off", // TODO: "warn",
  },
};
