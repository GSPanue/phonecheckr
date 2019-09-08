import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import path from 'path';

import baseConfig from './webpack.base.config.babel';

const root = path.resolve(__dirname, '..');

const config = {
  ...baseConfig,
  mode: 'production',
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

export default config;
