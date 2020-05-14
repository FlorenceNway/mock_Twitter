const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

module.exports = {
  mode: "development",

  entry: resolveAppPath("src"),

  output: {
    filename: "static/js/bundle.[hash].js",
  },

  devServer: {
    open: true,

    contentBase: resolveAppPath("public"),

    compress: true,

    hot: true,

    host: "localhost",

    port: 8080,

    publicPath: "/",
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath("public/index.html"),
    }),
  ],
};
