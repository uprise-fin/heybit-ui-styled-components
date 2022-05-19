const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    initial: [path.resolve(__dirname, "./src/initial.scss")],
    index: [path.resolve(__dirname, "./src/styles/index.scss")],

    "components/atom/transition/index": [
      path.resolve(__dirname, "./src/components/atom/transition/index.ts"),
    ],

    "components/atom/loading/index": [
      path.resolve(__dirname, "./src/components/atom/loading/index.ts"),
    ],

    "components/molecule/icon/index": [
      path.resolve(__dirname, "./src/components/molecule/icon/index.ts"),
    ],
    "components/molecule/img/index": [
      path.resolve(__dirname, "./src/components/molecule/img/index.ts"),
    ],
    "components/molecule/spinner/index": [
      path.resolve(__dirname, "./src/components/molecule/spinner/index.ts"),
    ],
    "components/molecule/skeleton/index": [
      path.resolve(__dirname, "./src/components/molecule/skeleton/index.ts"),
    ],

    "components/organism/input/index": [
      path.resolve(__dirname, "./src/components/organism/input/index.ts"),
    ],
    "components/organism/select/index": [
      path.resolve(__dirname, "./src/components/organism/select/index.ts"),
    ],
    "components/organism/button/index": [
      path.resolve(__dirname, "./src/components/organism/button/index.ts"),
    ],

    "components/template/dialog/index": [
      path.resolve(__dirname, "./src/components/template/dialog/index.ts"),
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
//     "input": [path.resolve(__dirname, "./src/input/index.ts")],
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
