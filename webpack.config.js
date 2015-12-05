'use strict';

module.exports = {
  entry: './public/script.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        query: { presets: ["react", "es2015"] }
      }
    ]
  }
}