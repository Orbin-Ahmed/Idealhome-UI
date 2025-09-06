/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
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

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
