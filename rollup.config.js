import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer'

const config = [
  {
    input: 'index.js',
    output: {
      dir: 'rollup-build/',
      format: 'esm',
      plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
    },
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      scss({
        output: 'rollup-build/index.css',
        processor: css => postcss([autoprefixer()]),
      })
    ]
  }, {
    input: 'index-polyfill.js',
    output: {
      dir: 'rollup-build/',
      format: 'esm',
      plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
    },
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      scss({
        output: 'rollup-build/index.css',
        processor: css => postcss([autoprefixer()]),
      })
    ]
  }
];

export default config;