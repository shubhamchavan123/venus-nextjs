/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,          // Disable sharp completely
  },

  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
    serverImageLoader: "cloudflare",  // Cloudflare-compatible loader
  },

  output: "export",  // Required for Cloudflare Pages
};

export default nextConfig;
