module.exports = {
  stories: [`../docs/**/*.stories.mdx`, `../src/**/*.stories.mdx`],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, `babel-plugin-dev-expression`],
  }),
  addons: [
    {
      name: `@storybook/preset-scss`,
      options: {
        styleLoaderOptions: {
          modules: {
            namedExport: true,
          },
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: `[name]__[local]--[hash:base64:5]`,
            namedExport: true,
          },
        },
      },
    },
    `@storybook/addon-links`,
    `@storybook/addon-essentials`,
  ],
};
