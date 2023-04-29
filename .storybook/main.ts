import { StorybookConfig } from '@storybook/web-components-webpack5';
import Path from 'path';
const AppSourceDir = Path.join(__dirname, '..', 'src');
// TODO 환경변수 추가
// TODO 환경변수에 따라 노출될 컴포넌트 분리(예: 체크된 컴포넌트는 완료, 아닌건 보여주지 않기)
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // 'storybook-color-picker',
    // '@storybook/addon-mdx-gfm'
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {}
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = Path.resolve(__dirname, '../src/');
    config.resolve.alias['~'] = Path.resolve(__dirname, '../');
    config.module?.rules?.push(
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'lit-scss-loader',
            options: {
              minify: true // defaults to false
            }
          },
          'extract-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        include: [AppSourceDir],
        loader: 'svg-inline-loader'
      }
    );

    // Return the altered config
    return config;
  },
  docs: {
    autodocs: true
  }
};
export default config;
