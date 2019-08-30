import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import path from 'path';

const root = path.resolve(__dirname, '..');

module.exports = {
  mode: 'production',
  devtool: '',
  entry: path.join(root, 'src'),
  output: {
    path: path.join(root, 'dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: [
        path.join(root, 'node_modules')
      ],
      loader: [
        'babel-loader'
      ]
    }]
  },
  externals: {
    knex: 'commonjs knex'
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disable',
      generateStatsFile: true,
      statsOptions: {
        source: false
      }
    })
  ],
  target: 'node'
};
