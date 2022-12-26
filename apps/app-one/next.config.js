/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['next-ui', 'common-styles', 'common']);

module.exports = withTM({
  reactStrictMode: true,
});
