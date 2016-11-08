const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const opener = require('opener');
const config = require('./webpack.config.dev');

const host = 'localhost';
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}));

app.use(hotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, host, (err) => {
  if (err) {
    console.error(err);
  }

  console.log(`Listening at ${host}:${port}`);
  opener(`http://${host}:${port}`);
});

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true,
//   stats: {
//     colors: true,
//   },
// })
// .listen(port, host, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(`Listening at ${host}:${port}`);
//   opener(`http://${host}:${port}`);
// });
