if (process.env.NODE_ENV === `production`) {
  require('./index.css');
} else {
  require('./index.scss');
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
