import babel from '@rollup/plugin-babel';
 
const config = {
  input: 'index.js',
  output: {
    file: 'bundle-rollup.js',
    format: 'cjs'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};
 
export default config;