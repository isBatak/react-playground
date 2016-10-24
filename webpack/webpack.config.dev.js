const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  context: path.resolve(__dirname, '..'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client.jsx',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
    extensions: ['', '.json', '.js', '.jsx'],
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
};
