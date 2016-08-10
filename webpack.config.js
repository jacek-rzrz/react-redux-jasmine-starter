var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  context: path.join(__dirname, 'src', 'main', 'jsx'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'main', 'resources', 'templates', 'index.html'),
      inject: 'head',
      hash: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  resolve: {
    root: [
      path.resolve(path.join(__dirname, 'src', 'main', 'jsx'))
    ],
  },
};
module.exports = config;
