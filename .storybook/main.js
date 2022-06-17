const Path = require("path");
const AppSourceDir = Path.join(__dirname, "..", "src");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/web-components",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
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
      },
      {
        test: /\.svg$/,
        include: [AppSourceDir],
        loader: "svg-inline-loader",
      }
    );

    // Return the altered config
    return config;
  },
};
