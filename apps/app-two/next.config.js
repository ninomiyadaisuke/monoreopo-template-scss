// /** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['common']);
const path = require('path');

module.exports = withTM({
  sassOptions: {
    includePaths: [path.join(__dirname, '../../packages/common/styles')],
  },
  reactStrictMode: true,
});
