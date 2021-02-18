module.exports = {
  stories: ['../src/**/*.stories.mdx'],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, `babel-plugin-dev-expression`],
  }),
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
};
