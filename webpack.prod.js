const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = () => {
  return merge(common, {
    mode: 'production'
  });
};
