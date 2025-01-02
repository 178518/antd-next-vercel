import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // distDir: 'dist', // 自定义构建目录
  compress: true, // 启用 gzip 压缩
  reactStrictMode: true, // 启用 React 严格模式
  experimental: {},
  poweredByHeader: false, // 隐藏 X-Powered-By 头信息
  pageExtensions: ['ts', 'tsx'], // 支持的页面文件扩展名
  eslint: {
    ignoreDuringBuilds: true // 在构建过程中忽略 ESLint 错误
  },
  compiler: {
    styledComponents: true // 启用 styled-components 编译器
  },
  generateEtags: false, // 禁止生成 etag
  crossOrigin: 'anonymous', // 设置跨域资源共享（CORS）的模式为匿名
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // 按需加载的页面在不活动状态下的最大保留时间（毫秒）
    pagesBufferLength: 2 // 按需加载时保留在内存中的页面数量
  },
  generateBuildId: async () => {
    if (process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID;
    }

    return `mc${new Date().getTime()}`; // 生成构建 ID，使用当前时间戳
  },
  // 添加 assetPrefix 地址到 publicRuntimeConfig
  publicRuntimeConfig: {
    assetPrefix: isProd ? '' : '' // 生产环境下的资源前缀
  },
  // 设置缓存
  async headers() {
    return [
      {
        source: '/:path*', // 应用于所有路由
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' }, // 允许发送 Cookie
          { key: 'Access-Control-Allow-Origin', value: '*' }, // 允许所有来源（需替换为实际的来源）
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' }, // 允许的 HTTP 方法
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With,X-NEXTJS-DATA, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' // 允许的请求头
          }
        ]
      }
    ];
  }
};

export default nextConfig;
