/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,   // disable sharp entirely
  },

  output: "export",       // required for Cloudflare Pages
};

export default nextConfig;
