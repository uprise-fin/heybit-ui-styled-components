const webpack = require("webpack");

const { merge } = require("webpack-merge");
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
  return merge(common, {
    mode,
    plugins: [new webpack.DefinePlugin(envKeys), new MiniCssExtractPlugin()],
  });
};
