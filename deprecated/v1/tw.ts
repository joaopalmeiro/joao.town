import { inspect } from 'node:util';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from './tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

console.log(
  inspect(fullConfig, {
    showHidden: false,
    depth: null,
    colors: true,
  })
);
