// /** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['common']);
const path = require('path');

module.exports = withTM({
  sassOptions: {
    includePaths: [path.resolve(__dirname, '../../packages/common/styles/')],
    additionalData: `@use '../../packages/common/styles/variables.scss' as *;`,
  },
  reactStrictMode: true,
});
