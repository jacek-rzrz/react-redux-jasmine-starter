var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      inject: 'head',
      hash: true
    })
  ],
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
          test: /\.json$/, loader: 'json'
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
      path.resolve(path.join(__dirname, 'src')),
      path.resolve(path.join(__dirname, 'styles'))
    ],
  },
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': 'window'
  }
};
module.exports = config;
