import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import path from 'path';

const root = path.resolve(__dirname, '..');

module.exports = {
  mode: 'production',
  devtool: '',
  entry: path.join(root, 'src'),
  output: {
    path: path.join(root, 'dist/js'),
    publicPath: '/js/',
    filename: 'bundle.min.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: [
        path.join(root, 'node_modules')
      ],
      loader: [
        'babel-loader',
        'eslint-loader'
      ]
    }, {
      test: /\.css$/,
      loader: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disable',
      generateStatsFile: true,
      statsOptions: {
        source: false
      }
    })
  ]
};
