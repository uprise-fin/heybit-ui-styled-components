const CopyPlugin = require('copy-webpack-plugin');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = () => {
  return merge(common, {
    mode: 'development',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        '~': path.resolve(__dirname, './'),
      },
    },
    devtool: 'source-map',
    devServer: {
      watchFiles: ['src/**/*'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
        template: 'demo/index.html',
      }),
      new CopyPlugin({
        patterns: [{from: 'static'}],
      }),
    ],
  });
};
