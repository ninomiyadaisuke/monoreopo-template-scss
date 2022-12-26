/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['next-ui']);

module.exports = withTM({
  reactStrictMode: true,
});
