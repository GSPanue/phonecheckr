import webpack from 'webpack';
import path from 'path';

const root = path.resolve(__dirname, '..');

module.exports = {
  mode: 'development',
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
        'babel-loader',
        'eslint-loader'
      ]
    }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  target: 'node'
};
