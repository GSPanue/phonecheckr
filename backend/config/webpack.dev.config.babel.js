import webpack from 'webpack';
import NodemonWebpackPlugin from 'nodemon-webpack-plugin';
import path from 'path';

import baseConfig from './webpack.base.config.babel';

const root = path.resolve(__dirname, '..');

const config = {
  ...baseConfig,
  mode: 'development',
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: [
        path.join(root, 'node_modules')
      ],
      loader: [
        'babel-loader',
        'eslint-loader'
      ]
    }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new NodemonWebpackPlugin()
  ]
};

export default config;
