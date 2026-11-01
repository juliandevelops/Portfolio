import type { NextConfig } from "next";
import { join } from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    includePaths: [join(__dirname, 'styles')]
  },
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      { source: "/work/projects", destination: "/work", permanent: true },
      { source: "/work/contributions", destination: "/work", permanent: true },
      { source: "/learnings", destination: "/blog?tag=learnings", permanent: true },
    ];
  }
};

export default nextConfig;
