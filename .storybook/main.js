const Path = require('path');
const Dotenv = require('dotenv-webpack');
const AppSourceDir = Path.join(__dirname, '..', 'src');
// TODO 환경변수 추가
// TODO 환경변수에 따라 노출될 컴포넌트 분리(예: 체크된 컴포넌트는 완료, 아닌건 보여주지 않기)
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/web-components',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    config.plugins.push(new Dotenv());
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    config.resolve.alias['~'] = path.resolve(__dirname, '../');
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'lit-scss-loader',
            options: {
              minify: true, // defaults to false
            },
          },
          'extract-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        include: [AppSourceDir],
        loader: 'svg-inline-loader',
      },
    );

    // Return the altered config
    return config;
  },
};
