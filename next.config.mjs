/** @type {import('next').NextConfig} */

import path from "path";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },

  experimental: {
    outputFileTracingRoot: path.join(__dirname),
  },

  outputFileTracingIgnores: [
    {
      "**/*": ["**/.next/**", "**/.turbo/**", "**/.cache/**", "**/.vercel/**"],
    },
    { "**/*": ["**/dist/**", "**/build/**"] },
    { "**/*": ["**/.git/**", "**/.idea/**"] },
    { "**/*": ["**/*.map", "**/*.log"] },
  ],
};

export default withNextIntl(nextConfig);
