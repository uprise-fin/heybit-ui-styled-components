const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = (_) => {
  return merge(common, {
    entry: {
      "components/atom/variable": [
        path.resolve(__dirname, "./src/components/atom/variable/index.ts"),
      ],
      // "components/atom/delay": [
      //   path.resolve(__dirname, "./src/components/atom/delay/index.ts"),
      // ],
      "components/atom/loading": [
        path.resolve(__dirname, "./src/components/atom/loading/index.ts"),
      ],
      "components/atom/transition": [
        path.resolve(__dirname, "./src/components/atom/transition/index.ts"),
      ],

      "components/molecule/icon": [
        path.resolve(__dirname, "./src/components/molecule/icon/index.ts"),
      ],
      "components/molecule/img": [
        path.resolve(__dirname, "./src/components/molecule/img/index.ts"),
      ],
      // "components/molecule/list": [
      //   path.resolve(__dirname, "./src/components/molecule/list/index.ts"),
      // ],
      "components/molecule/skeleton": [
        path.resolve(__dirname, "./src/components/molecule/skeleton/index.ts"),
      ],
      "components/molecule/spinner": [
        path.resolve(__dirname, "./src/components/molecule/spinner/index.ts"),
      ],
      "components/molecule/toast": [
        path.resolve(__dirname, "./src/components/molecule/toast/index.ts"),
      ],
      // "components/molecule/tooltip": [
      //   path.resolve(__dirname, "./src/components/molecule/tooltip/index.ts"),
      // ],

      "components/organism/button": [
        path.resolve(__dirname, "./src/components/organism/button/index.ts"),
      ],
      // "components/organism/input": [
      //   path.resolve(__dirname, "./src/components/organism/input/index.ts"),
      // ],
      // "components/organism/select": [
      //   path.resolve(__dirname, "./src/components/organism/select/index.ts"),
      // ],
      // "components/organism/tab": [
      //   path.resolve(__dirname, "./src/components/organism/tab/index.ts"),
      // ],

      "components/template/modal": [
        path.resolve(__dirname, "./src/components/template/modal/index.ts"),
      ],
      "components/template/dialog": [
        path.resolve(__dirname, "./src/components/template/dialog/index.ts"),
      ],
      "components/template/sheet-dialog": [
        path.resolve(
          __dirname,
          "./src/components/template/sheet-dialog/index.ts"
        ),
      ],
      "components/template/event-dialog": [
        path.resolve(
          __dirname,
          "./src/components/template/event-dialog/index.ts"
        ),
      ],
    },
  });
};
