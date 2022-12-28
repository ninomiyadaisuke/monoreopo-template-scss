module.exports = {
  ...require('eslint-config-custom/index.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
