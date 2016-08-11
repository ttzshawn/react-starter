'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: { path: __dirname + '/src', filename: 'bundle.js' },
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