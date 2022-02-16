module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": "off",
    "prettier/prettier": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
}
