const path = require('path');

const jsExtensions = ['.js', '.json', '.mjs', '.es', '.node', '.jsx'];
const tsExtensions = ['.ts', '.d.ts', '.tsx'];
const extensions = [...jsExtensions, ...tsExtensions];

const root = path.resolve('./');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
    'jsx-a11y',
    'react-hooks',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    linkComponents: ['Anchor', 'Link'],
    'import/resolver': {
      node: { extensions },
      alias: {
        map: [
          ['~env', `${root}/src/env.ts`],
          ['~app', `${root}/src`],
          ['~api', `${root}/src/api`],
          ['~design', `${root}/src/design-system`],
          // development only
          ['~storybook', `${root}/.storybook`],
          ['~tests', `${root}/tests`],
        ],
        extensions,
      },
    },
  },
  globals: {
    analytics: true,
  },
  rules: {
    'no-undef': 'error',
    'prefer-named-capture-group': 'off',
    'no-duplicate-imports': 'error',
    'no-process-env': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prefer-const': 'warn',
    'no-shadow': [
      'warn',
      {
        builtinGlobals: true,
        allow: ['name', 'confirm', 'alert', 'close', 'file', 'find', 'status'],
      },
    ],
    'react/prop-types': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/jsx-handler-names': 'off',
    'react/no-children-prop': 'off',
    'react/forbid-dom-props': ['warn', { forbid: ['id'] }],
    'react/display-name': ['warn'],
    'react/jsx-key': ['warn'],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': [
      'warn',
      {
        extendDefaults: true,
        types: {
          '{}': null,
          Object: null, // todo: we should remove this later
          object: null, // todo: we should remove this later
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],

    // no-useless-constructor doens't handle constructor definitions in .d.ts files properly.
    // Instead we use `@typescript-eslint/no-useless-constructor` which does handle them properly.
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Typescript types and interfaces need to be exported directly when defined. These two rules
    // will complain about that.
    'import/group-exports': 'off',
    'import/exports-last': 'off',

    'react/jsx-max-depth': 'off',
    'no-nested-ternary': 'off',

    // Allow some common math symbols
    'id-length': [
      'warn',
      {
        min: 2,
        exceptions: ['x', 'y', 'i', 'j', 'e', 'R', '_', 'b'],
      },
    ],
    'jsx-a11y/heading-has-content': 'warn',
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        // == is needed for null checks.
        eqeqeq: 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/group-exports': 'off',
        'max-classes-per-file': 'off',
      },
    },
    {
      files: ['*.test.*'],
      rules: {
        camelcase: 'off',
        'max-nested-callbacks': 'off',
      },
    },
  ],
};

