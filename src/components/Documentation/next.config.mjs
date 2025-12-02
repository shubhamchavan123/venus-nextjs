/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ⛔ disable sharp
  },

  experimental: {
    serverImageLoader: "imgix", // use built-in loader
  },

  output: "standalone",
};

export default nextConfig;
