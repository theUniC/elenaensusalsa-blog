const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: "[name].js",
    chunkFilename: "[id].css"
  },

  devtool: 'inline-source-map',

  devServer: {
    port: process.env.PORT || 3000,
    contentBase: path.join(process.cwd(), "./dist"),
    watchContentBase: true,
    quiet: false,
    open: true,
    historyApiFallback: {
      rewrites: [{from: /./, to: "404.html"}]
    }
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "dist/**/*.js",
        "dist/**/*.css",
        "data/webpack.json"
      ]}),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
