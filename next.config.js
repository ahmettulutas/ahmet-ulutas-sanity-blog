/** @type {import('next').NextConfig} */

const nextConfig = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }, { hostname: 'lh3.googleusercontent.com' }],
  },
};

module.exports = nextConfig;
