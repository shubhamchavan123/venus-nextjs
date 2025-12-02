
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/venus-nextjs` : "";

const nextConfig = {
  // REMOVE output: "export",  
  
  basePath,
  assetPrefix: basePath,

  images: {
    // remove unoptimized for server build (optional)
    qualities: [100],
  },

  trailingSlash: false,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === "production";
// const basePath = isProd ? `/venus-nextjs` : "";

// const nextConfig = {
//   output: "export",
//   basePath,
//   assetPrefix: basePath,
//   images: {
//     unoptimized: true,
//   },
//   trailingSlash: true,
//   env: {
//     NEXT_PUBLIC_BASE_PATH: basePath,
//   },
// };

// export default nextConfig;
