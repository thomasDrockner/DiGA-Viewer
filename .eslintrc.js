module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@stencil-community/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: [
          "variable",
        ],
        modifiers: ["const", "global"],
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: [
          "variableLike",
          "accessor",
          "method",
          "parameterProperty",
          "property",
        ],
        format: ["camelCase"],
      },
      {
        selector: [
          "variableLike",
          "accessor",
          "method",
          "parameterProperty",
          "property",
        ],
        modifiers: ["unused"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: ["typeLike", "enumMember"],
        format: ["PascalCase"],
      },
    ],
  },
  root: true,
};
