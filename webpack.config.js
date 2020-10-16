const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'eval-source-map',
  mode: PRODUCTION ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.pug'),
      filename: `./${'index.pug'.replace(/\.pug/,'.html')}`
    }),
  ]
};