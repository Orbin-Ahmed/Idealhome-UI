// /** @type {import('next').NextConfig} */
// import createNextIntlPlugin from "next-intl/plugin";

// const nextConfig = {
//   output: "standalone",
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },
//   experimental: {},
// };

// const withNextIntl = createNextIntlPlugin();

// export default withNextIntl(nextConfig);

import path from "path";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
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
