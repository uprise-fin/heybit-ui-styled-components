const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: ["./src/index.scss"],
    "hb-input": ["./src/hb-input.scss"],
    "hb-dialog": ["./src/hb-dialog.scss"],
    "hb-select": ["./src/hb-select.scss"],
    // "sce-frontend": ["./src/variables.scss"],
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devtool: "source-map",
  plugins: [new FixStyleOnlyEntriesPlugin(), new MiniCssExtractPlugin()],

  // output: {
  //   filename: "bundle.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
};
