var path = require('path');

var config = {
  context: path.join(__dirname, 'src', 'main', 'jsx'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
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
