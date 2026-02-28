/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用图像优化
  images: {
    domains: [],
  },
  // 启用实验性功能
  experimental: {
    optimizeCss: true,
  },
  // 静态优化
  output: 'standalone',
};

export default nextConfig;