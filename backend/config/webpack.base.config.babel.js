import nodeExternals from 'webpack-node-externals';
import path from 'path';

const root = path.resolve(__dirname, '..');

const config = {
  devtool: '',
  entry: path.join(root, 'src'),
  output: {
    path: path.join(root, 'dist'),
    filename: 'bundle.min.js'
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.join(root, 'src'),
      config: path.join(root, 'config')
    }
  },
  target: 'node'
};

export default config;
