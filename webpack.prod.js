const webpack = require("webpack");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const dotenv = require("dotenv");

module.exports = (_, options) => {
  const env = {
    MODE: "production",
  };
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return merge(common, {
    mode: env.MODE,
    plugins: [new webpack.DefinePlugin(envKeys), new MiniCssExtractPlugin()],
  });
};
