const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = (_, options) => {
  const env = {
    MODE: "production",
  };
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return merge(common, {
    entry: {
      index: [path.resolve(__dirname, "./src/index.ts")],
    },
    mode: env.MODE,
    plugins: [new webpack.DefinePlugin(envKeys)],
  });
};