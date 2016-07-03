import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const webpackConfig = require('../webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
  const compiler = webpack(webpackConfig);
  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    hot: true,
    noInfo: true
  });
  app.use(devMiddleware);
  app.use(webpackHotMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));
  app.get('/', (req, res) => {
    res.write(devMiddleware.fileSystem.readFileSync(path.join(__dirname, '../public/index.html')));
    res.end();
  });
} else {
  app.use(express.static(path.resolve(__dirname, '../public')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}

app.listen(port, () => {
  console.info('👂👂👂~~> Listening on port ' + port + '!!!');
});
