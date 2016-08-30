'use strict';
let webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: { path: './src', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};