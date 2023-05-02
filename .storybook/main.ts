import { StorybookConfig } from '@storybook/web-components-webpack5';
import Path from 'path';

const AppSourceDir = Path.join(__dirname, '..', 'src');
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {}
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': Path.resolve(__dirname, '../src/'),
          '~': Path.resolve(__dirname, '../')
        }
      },
      module: {
        ...config.module,
        rules: [
          ...(config.module?.rules || []),
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
        ]
      }
    };
  },
  docs: {
    autodocs: true
  }
};
export default config;
