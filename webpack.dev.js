const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");
const dotenv = require("dotenv");

module.exports = (_, options) => {
  const mode = options.mode;
  const env = dotenv.config({
    path: `.env/${mode}.env`,
  }).parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  console.log(envKeys);

  return merge(common, {
    mode,
    devtool: "source-map",
    devServer: {
      watchFiles: ["src/**/*"],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
        template: "demo/index.html",
      }),
    ],
  });
};
