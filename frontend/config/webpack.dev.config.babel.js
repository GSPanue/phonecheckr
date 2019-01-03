import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import path from 'path';

const root = path.resolve(__dirname, '..');

module.exports = {
  mode: 'development',
  entry: path.join(root, 'src'),
  output: {
    path: path.join(root, 'dist/js'),
    publicPath: '/js/',
    filename: 'bundle.min.js'
  },
  devServer: {
    contentBase: path.join(root, 'dist'),
    compress: true
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
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
