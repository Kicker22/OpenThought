/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {}, // Remove 'turbo' to disable Turbopack
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
    });
    return config;
  },
};

module.exports = nextConfig;
