const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.tsx'),
  },
  stats: { warnings: false },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // create only one bundle file when we build it
  },

  // Use static: './directory-name' instead of contentBase: './directory-name'
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      // This is for setting up rules for webpack to read our code. We are teaching webpack our to read our code. We are using regex to tell webpack to read all the files ending with js or jsx with babel-loader while excluding anything from node_modules.
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: '[name].css',
      // filename: ({ chunk }) => `${chunk.name.replace('/js/', '/css/')}.css`,
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: './public/favicon.ico',
      filename: 'index.html',
      manifest: './public/manifest.json',
    }),
  ],
};

module.exports = config;
