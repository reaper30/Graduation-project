module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    semi: ["error", "never"],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "spaced-comment": ["error", "never"],
    "multiline-ternary": ["error", "always-multiline"],
    "no-new": 0,
    "no-tabs": 0,
    "no-trailing-spaces": "error"
  }
}
