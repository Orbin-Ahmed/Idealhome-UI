/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: "standalone",

  // Optional: Configure image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Optional: Enable experimental features
  experimental: {
    // serverComponentsExternalPackages: [],
  },
};

module.exports = nextConfig;
