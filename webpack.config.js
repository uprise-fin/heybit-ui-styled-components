const path = require("path");
// const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: [path.resolve(__dirname, "./src/index.ts")],
    "hb-input": [path.resolve(__dirname, "./src/hb-input/index.ts")],
    "hb-dialog": [path.resolve(__dirname, "./src/hb-dialog/index.ts")],
    "hb-select": [path.resolve(__dirname, "./src/hb-select/index.ts")],
    // index: ["./src/index.scss"],
    // "hb-input": ["./src/hb-input.scss"],
    // "hb-dialog": ["./src/hb-dialog.scss"],
    // "hb-select": ["./src/hb-select.scss"],
    // "sce-frontend": ["./src/variables.scss"],
  },
  module: {
    rules: [
      { test: /\.hbs$/, loader: "handlebars-loader" },

      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          "ts-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".hbs"],
  },
  // plugins: [new FixStyleOnlyEntriesPlugin(), new MiniCssExtractPlugin()],

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    library: "@uprise-fin/heybit-ui-styles",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
};
// module.exports = {
//   mode: "production",
//   entry: {
//     index: [path.resolve(__dirname, "./src/index.ts")],
//     "hb-input": [path.resolve(__dirname, "./src/hb-input/index.ts")],
//   },
//   module: {
//     rules: [
//       { test: /\.hbs$/, loader: "handlebars-loader" },
//       {
//         test: /\.ts$/,
//         exclude: /(node_modules|bower_components)/,
//         use: [
//           {
//             loader: "babel-loader",
//             options: {
//               presets: ["@babel/preset-env"],
//             },
//           },
//           {
//             loader: "ts-loader",
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: ["css-modules-typescript-loader", "css-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".hbs"],
//   },
//   output: {
//     path: path.resolve(__dirname, "./dist"),
//     filename: "[name].js",
//     library: "@uprise-fin/heybit-ui-components",
//     libraryTarget: "umd",
//     globalObject: "this",
//     umdNamedDefine: true,
//   },
// };
