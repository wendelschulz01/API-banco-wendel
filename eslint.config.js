import js from '@eslint/js';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

const projectPackageJson = JSON.parse(
  readFileSync(path.resolve('package.json'), 'utf8')
);

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'class-methods-use-this': 'off',
      'no-param-reassign': 'off',
      camelcase: 'off',
      'no-underscore-dangle': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    },
  },
];
