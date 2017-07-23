var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
  entry: ['./frames.js', './main.sass'],
  context: __dirname + "/app",
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.pug$/,
        loaders: ['pug-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.pug',
      filetype: 'pug',
      inject: false
    }),
    new HtmlWebpackPugPlugin(),
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ],
};
