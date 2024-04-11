// @ts-check

import eslintPluginAstro from 'eslint-plugin-astro';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...eslintPluginAstro.configs['flat/base'],
  {
    rules: {
      'astro/missing-client-only-directive-value': 'error',
    },
  },
];
