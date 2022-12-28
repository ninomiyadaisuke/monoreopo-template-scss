/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, '../../packages/common/styles')],
  },
  reactStrictMode: true,
};
