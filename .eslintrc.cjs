/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "no-console": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off"
  } 
};
