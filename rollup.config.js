import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';

const config = {
  input: 'index.js',
  output:     {
    file: 'bundle-rollup.js',
    format: 'esm',
    plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};

export default config;