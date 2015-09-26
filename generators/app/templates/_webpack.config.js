var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/js/index'
  ],

  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'index.js',
    publicPath: '/static/js/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.png$/,
      loader: "url-loader?limit=100000"
    },{
      test: /\.jpg$/,
      loader: "file-loader"
    },{
      test: /\.css$/,
      loader: "style!css"
    },{
      test: /\.less$/,
      loader: "css!less"
    }]
  }
};