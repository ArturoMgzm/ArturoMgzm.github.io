import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stenciljs-test',
  // globalStyle: 'www/tailwind.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    tailwind(),
    tailwindHMR(),
    sass({
      injectGlobalPaths: [
        'assets/scss/variables.scss',
        // 'assets/scss/mixins.scss'
      ]
    })
  ],
};