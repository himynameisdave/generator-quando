var commonConfig      = require("./webpack.common.config.js"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    webpack           = require("webpack");

module.exports = {
  entry: [
  './src/js/index.js'
  ],
  output: {
    path: './dist',
    filename: 'bundle.[hash].js'
  },
  devtool:'source-map',
  devServer: {
    // proxy calls to api to our own node server backend
    proxy: {
      '/api/*': 'http://localhost:5000/'
    }
  },
  module: {
    loaders: commonConfig.loaders
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    commonConfig.indexPagePlugin
  ],
}
