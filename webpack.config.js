
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '/client/index.jsx'),
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  plugins: [new CompressionPlugin({
    test: /\.js$|\.css$|\.html$/,
    algorithm: 'gzip',
    minRatio: 0.8,
    filename: '[path].gz',
  })],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
