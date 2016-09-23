'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
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
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      }
    ]
  },
};