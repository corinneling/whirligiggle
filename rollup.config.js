import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss'

const config = {
  input: 'index.js',
  output:     {
    file: 'bundle-rollup.js',
    format: 'esm',
    plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    scss()
  ]
};

export default config;