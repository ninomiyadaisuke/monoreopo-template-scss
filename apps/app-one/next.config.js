/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['common']);

module.exports = withTM({
  reactStrictMode: true,
});
