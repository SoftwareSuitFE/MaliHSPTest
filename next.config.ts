// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
  // For Ant Design to work properly with Next.js + App Router
  transpilePackages: ["@ant-design"],
};

module.exports = nextConfig;
