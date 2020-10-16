import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
 
const config = {
  input: 'index.js',
  output:     {
    dir: 'dist',
    format: 'esm',
    plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};
 
export default config;