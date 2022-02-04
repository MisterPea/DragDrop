const path = require('path');

module.exports = {
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
    fallback: {
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
    },
  },
  entry: './src/DragDrop/DragDrop.js',
  output: {
    path: path.resolve('lib'),
    filename: 'DragDrop.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    // Don't bundle
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
