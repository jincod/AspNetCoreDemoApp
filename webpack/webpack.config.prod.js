var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['./src/client/index.js'],

  output: {
    path: path.join(__dirname, '..', 'src', 'AspNet5DemoApp', 'wwwroot'),
    filename: "bundle.js"
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, '..', 'src', 'client')
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap'),
        include: path.join(__dirname, '..', 'src', 'client', 'styles')
    }]
  }
};