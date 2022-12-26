/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['next-ui', 'common-styles']);

module.exports = withTM({
  reactStrictMode: true,
});
