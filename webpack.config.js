var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  context: path.join(__dirname, 'src', 'main'),
  entry: [
    './jsx/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'main', 'resources', 'templates', 'index.html'),
      inject: 'head',
      hash: true
    })
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css?sourceMap!' +
                    'less?sourceMap'
                )
            }
    ],
  },
  resolve: {
    root: [
      path.resolve(path.join(__dirname, 'src', 'main', 'jsx')),
      path.resolve(path.join(__dirname, 'src', 'main', 'resources', 'less'))
    ],
  },
};
module.exports = config;
