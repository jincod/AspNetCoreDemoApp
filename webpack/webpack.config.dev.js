var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './src/client/index.js'
  ],

  output: {
    path: path.join(__dirname, '..', 'src', 'AspNet5DemoApp', 'wwwroot'),
    filename: "bundle.js",
    publicPath: "http://localhost:3000/"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, '..', 'src', 'client')
      }, {
        test: /\.css$/,
        loader: "style!css",
        include: path.join(__dirname, '..', 'src', 'client', 'styles')
    }]
  }
};