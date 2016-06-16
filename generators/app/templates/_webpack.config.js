const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // cleans build dir after building
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // used for splitting CSS off into it's own file for production
const HtmlWebpackPlugin = require('html-webpack-plugin'); // makes a tiny html file for you
//  Loop through our dependencies in the package.json to find out what to pull into our vendor.js file
const appDependenciesBlacklist = [ 'body-parser', 'express' ];
const appDependencies = Object.keys(require('./package.json').dependencies)
                          .filter(dep => {
                            return appDependenciesBlacklist.indexOf(dep) < 0;
                          });

//  This === 'build' or 'start' or 'stats' depending on which `npm run` command is used
//  This is going to determine what set of configs we merge with common and use
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  public: path.resolve(__dirname, 'public'),
  css: path.resolve(__dirname, 'src/css/'),
  images: path.resolve(__dirname, 'src/images/'),
  fonts: path.resolve(__dirname, 'src/fonts/')
};

//  Config options that are common to both the dev and builds goes here
const commonConfig = {
  entry: {
    app: PATHS.src
  },
  output: {
    path: PATHS.public,
    publicPath: '/',
    // filename: 'bundle.js'
    // Output using the entry name insted of generic 'bundle.js'
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.json?$/,
        loader: 'json'
      }, {
        test: /\.(jpg|gif|png|svg)$/,
        loader: 'url?limit=25000',
        include: PATHS.images
      }, {
        test: /\.(woff(2)?|ttf|svg)$/,
        loader: 'file-loader?name=fonts/[name].[hash].[ext]',
        include: PATHS.fonts
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rithm',
      filename: './index.html',
      template: './webpack-index-template.ejs',
      inject: 'body',
      appMountId: 'app'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(commonConfig, {
    //  enables simple-but-fast debugging in the browser
    // devtool: 'eval-cheap-module-source-map',
    //  slow af build BUT best source maps (proper in browser)
    devtool: 'source-map',
    // devServer: {
    //   historyApiFallback: true, // used for things like react-router
    //   hot: true,  //  dem hot modules
    //   inline: true, // inline vs iframe, see: https://webpack.github.io/docs/webpack-dev-server.html#inline-mode
    //   progress: true, // show a progress bar when building
    //   stats: 'errors-only', // only log errors
    //   // Parse host and port from env to allow customization.
    //   host: process.env.HOST,
    //   port: process.env.PORT
    // },
    entry: [
      'webpack-hot-middleware/client?reload=true',
      'webpack/hot/only-dev-server',
      PATHS.src
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /\\node_modules/,
          loaders: ['react-hot', 'babel'],
          include: PATHS.src
        }, {
          test: /\.scss$/,
          loaders: ['style', 'css', 'postcss', 'sass'],
          include: PATHS.css
        }
      ]
    },
    postcss: () => [autoprefixer({ browsers: [ 'ios 5', 'android 2.1', '> 1%' ] })],
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  });
}
if (TARGET === 'build' || TARGET === 'stats') {
  module.exports = merge(commonConfig, {
    entry: {
      //  This will grab all of the
      vendor: appDependencies
    },
    output: {
      path: PATHS.public,
      filename: '[name].[chunkhash].js', // name is coming from the file it
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /\\node_modules/,
          loader: 'babel',
          include: PATHS.src
        }, {
          test: /\.scss$/,
          //  "Extract" means that it's gonna move the css into its own file so it can be cached etc...
          loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
          include: PATHS.src
        }
      ]
    },
    postcss: () => [autoprefixer({ browsers: [ 'ios 5', 'android 2.1', '> 1%' ] })],
    plugins: [
      //  Clean out the assets dir before/after every build
      new CleanWebpackPlugin([PATHS.public]),
      new ExtractTextPlugin('styles.[chunkhash].css'),
      //  teaches webpack that we might have some common code, keep it separate
      new webpack.optimize.CommonsChunkPlugin({
        //  vendor is specified in this part's "entry", "app" comes from above and is merged in
        //  manifest maps the two
        names: ['vendor', 'manifest']
      }),
      // ensures there is no duplicate code used (useful if using a lot of deps)
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        //  Setting DefinePlugin affects React library size!
        //  React is basically like "yo shit it's production" and makes itself smaller
        'process.env.NODE_ENV': '"production"'
        //  DefinePlugin replaces content "as is" so we need some extra quotes for the generated code to make sense
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
