const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = _ => {
  return merge(common, {
    mode: 'production',
    // entry: {
    //   'src/components/atom/variable/index': [
    //     path.resolve(__dirname, './src/components/atom/variable/index'),
    //   ],
    //   'components/atom/anchor': [
    //     path.resolve(__dirname, './src/components/atom/anchor/index'),
    //   ],
    //   'src/components/atom/loading/index': [
    //     path.resolve(__dirname, './src/components/atom/loading/index'),
    //   ],
    //   'src/components/atom/transition/index': [
    //     path.resolve(__dirname, './src/components/atom/transition/index'),
    //   ],

    //   'src/components/molecule/icon/index': [
    //     path.resolve(__dirname, './src/components/molecule/icon/index'),
    //   ],
    //   'src/components/molecule/img/index': [
    //     path.resolve(__dirname, './src/components/molecule/img/index'),
    //   ],
    //   // "components/molecule/list": [
    //   //   path.resolve(__dirname, "./src/components/molecule/list/index"),
    //   // ],
    //   'src/components/molecule/skeleton/index': [
    //     path.resolve(__dirname, './src/components/molecule/skeleton/index'),
    //   ],
    //   'src/components/molecule/spinner/index': [
    //     path.resolve(__dirname, './src/components/molecule/spinner/index'),
    //   ],
    //   'src/components/molecule/toast/index': [
    //     path.resolve(__dirname, './src/components/molecule/toast/index'),
    //   ],
    //   // "components/molecule/tooltip": [
    //   //   path.resolve(__dirname, "./src/components/molecule/tooltip/index"),
    //   // ],

    //   'src/components/organism/button/index': [
    //     path.resolve(__dirname, './src/components/organism/button/index'),
    //   ],
    //   // "components/organism/input": [
    //   //   path.resolve(__dirname, "./src/components/organism/input/index"),
    //   // ],
    //   // "components/organism/select": [
    //   //   path.resolve(__dirname, "./src/components/organism/select/index"),
    //   // ],
    //   // "components/organism/tab": [
    //   //   path.resolve(__dirname, "./src/components/organism/tab/index"),
    //   // ],

    //   'src/components/template/modal/index': [
    //     path.resolve(__dirname, './src/components/template/modal/index'),
    //   ],
    //   'src/components/template/modal/dialog/index': [
    //     path.resolve(__dirname, './src/components/template/modal/dialog/index'),
    //   ],
    //   'src/components/template/modal/sheet-dialog/index': [
    //     path.resolve(
    //       __dirname,
    //       './src/components/template/modal/sheet-dialog/index',
    //     ),
    //   ],
    //   'src/components/template/modal/event-dialog/index': [
    //     path.resolve(
    //       __dirname,
    //       './src/components/template/modal/event-dialog/index',
    //     ),
    //   ],
    // },
  });
};
