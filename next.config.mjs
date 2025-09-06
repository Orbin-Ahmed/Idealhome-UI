/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  output: "standalone",
  outputFileTracing: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {},
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
