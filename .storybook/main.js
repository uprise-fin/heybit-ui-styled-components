const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/web-components",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "lit-scss-loader",
          options: {
            minify: true, // defaults to false
          },
        },
        "extract-loader",
        "css-loader",
        "sass-loader",
      ],
    });

    // Return the altered config
    return config;
  },
};
