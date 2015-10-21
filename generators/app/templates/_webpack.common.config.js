var HtmlWebpackPlugin = require("html-webpack-plugin"),
    path              = require("path");

module.exports = {
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
  }],
  indexPagePlugin: new HtmlWebpackPlugin({
                    inject: true,
                    title: 'himynameisdave',
                    filename: 'index.html',
                    template: './src/index_template.html'
                  })
};
