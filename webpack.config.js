'use strict';

var webpack = require ('webpack');
var path = require ('path');
var output = './dist';

module.exports = {
  target: 'web',
  devtool: 'source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve ('./src'),
    publicPath: 'http://localhost:3000/',
    // hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    // hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  },

  // recordsPath: path.resolve (path.join (output, 'webpack/webpack.records.json')),

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    alias: {
      'electrum':       path.join (__dirname, '../electrum'),
      'electrum-arc':   path.join (__dirname, '../electrum-arc'),
      'electrum-theme': path.join (__dirname, '../electrum-theme'),
    }
  },

  plugins: [
    new webpack.LoaderOptionsPlugin ({debug: true}),
    new webpack.HotModuleReplacementPlugin (),
    new webpack.NoErrorsPlugin (),
    new webpack.DefinePlugin ({
      __DEV__: true,
      'process.env': {
        BABEL_ENV: JSON.stringify ('development'),
        NODE_ENV: JSON.stringify ('development')
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules|jquery/,
        loader: 'babel-loader'
      }
    ]
  }
};
