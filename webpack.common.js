const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    initial: [path.resolve(__dirname, "./src/initial.scss")],
    index: [path.resolve(__dirname, "./src/styles/index.scss")],

    "components/molecule/hb-icon/index": [
      path.resolve(__dirname, "./src/components/molecule/hb-icon/index.ts"),
    ],
    "components/molecule/hb-img/index": [
      path.resolve(__dirname, "./src/components/molecule/hb-img/index.ts"),
    ],
    "components/molecule/hb-spinner/index": [
      path.resolve(__dirname, "./src/components/molecule/hb-spinner/index.ts"),
    ],
    "components/molecule/hb-skeleton/index": [
      path.resolve(__dirname, "./src/components/molecule/hb-skeleton/index.ts"),
    ],

    "components/organism/hb-input/index": [
      path.resolve(__dirname, "./src/components/organism/hb-input/index.ts"),
    ],
    "components/organism/hb-select/index": [
      path.resolve(__dirname, "./src/components/organism/hb-select/index.ts"),
    ],
    "components/organism/hb-button/index": [
      path.resolve(__dirname, "./src/components/organism/hb-button/index.ts"),
    ],

    "components/template/hb-dialog/index": [
      path.resolve(__dirname, "./src/components/template/hb-dialog/index.ts"),
    ],
  },
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: [
      //     {
      //       loader: "babel-loader",
      //       options: {
      //         presets: ["@babel/preset-env"],
      //       },
      //     },
      //     "ts-loader",
      //   ],
      // },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, "./src/initial.scss"),
          path.resolve(__dirname, "./src/styles/index.scss"),
        ],
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
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "./src/initial.scss"),
          path.resolve(__dirname, "./src/styles/index.scss"),
        ],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".svg", ".css", ".scss"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  // plugins: [new FixStyleOnlyEntriesPlugin(), new MiniCssExtractPlugin()],

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    library: "heybit-ui-styled-components",
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
