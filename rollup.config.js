/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import styles from 'rollup-plugin-styles';
import litcss from 'rollup-plugin-lit-css';
import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import Sass from 'sass';

export default {
  // input: 'my-element.js',
  input: ['tsc-out/**/*.js'],
  output: {
    dir: 'dist',
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    styles({mode: 'emit'}),
    litcss({
      include: '/**/*.scss',
      transform: (data, {filePath}) =>
        Sass.renderSync({data, file: filePath}).css.toString(),
    }),
    replace({'Reflect.decorate': 'undefined'}),
    resolve(),
    terser({
      ecma: 2017,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
};
