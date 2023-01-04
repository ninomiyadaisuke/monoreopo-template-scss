/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'styles')],
  },
  reactStrictMode: true,
};
