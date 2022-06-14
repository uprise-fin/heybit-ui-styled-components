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
      "components/atom/delay/index": [
        path.resolve(__dirname, "./src/components/atom/delay/index.ts"),
      ],
      "components/atom/loading/index": [
        path.resolve(__dirname, "./src/components/atom/loading/index.ts"),
      ],
      "components/atom/transition/index": [
        path.resolve(__dirname, "./src/components/atom/transition/index.ts"),
      ],

      "components/molecule/icon/index": [
        path.resolve(__dirname, "./src/components/molecule/icon/index.ts"),
      ],
      "components/molecule/img/index": [
        path.resolve(__dirname, "./src/components/molecule/img/index.ts"),
      ],
      "components/molecule/list/index": [
        path.resolve(__dirname, "./src/components/molecule/list/index.ts"),
      ],
      "components/molecule/skeleton/index": [
        path.resolve(__dirname, "./src/components/molecule/skeleton/index.ts"),
      ],
      "components/molecule/spinner/index": [
        path.resolve(__dirname, "./src/components/molecule/spinner/index.ts"),
      ],
      "components/molecule/toast/index": [
        path.resolve(__dirname, "./src/components/molecule/toast/index.ts"),
      ],
      "components/molecule/tooltip/index": [
        path.resolve(__dirname, "./src/components/molecule/tooltip/index.ts"),
      ],

      "components/organism/button/index": [
        path.resolve(__dirname, "./src/components/organism/button/index.ts"),
      ],
      "components/organism/input/index": [
        path.resolve(__dirname, "./src/components/organism/input/index.ts"),
      ],
      "components/organism/select/index": [
        path.resolve(__dirname, "./src/components/organism/select/index.ts"),
      ],
      "components/organism/tab/index": [
        path.resolve(__dirname, "./src/components/organism/tab/index.ts"),
      ],

      "components/template/modal/index": [
        path.resolve(__dirname, "./src/components/template/modal/index.ts"),
      ],
      "components/template/dialog/index": [
        path.resolve(__dirname, "./src/components/template/dialog/index.ts"),
      ],
    },
    mode: env.MODE,
    plugins: [new webpack.DefinePlugin(envKeys)],
  });
};
