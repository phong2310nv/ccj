import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  reactStrictMode: true,

  webpack(config) {
    // Add path aliases for webpack resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@store': path.resolve(__dirname, 'src/store'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@images': path.resolve(__dirname, 'public/assets/images'),
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      // Add include to limit SVG processing to specific directories if needed
      // include: path.resolve(__dirname, 'src/assets/icons'),
    });

    return config;
  },

  turbopack: {
    rules: {
      '*.svg': {
        as: '*.js',
        loaders: ['@svgr/webpack'],
      },
    },
  },

  // Headers
  // headers: async () => {
  //   return [
  //     {
  //       source: '/.well-known/apple-app-site-association',
  //       headers: [{ key: 'Content-Type', value: 'application/json' }],
  //     },
  //   ];
  // },

  // Redirects
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ];
  // },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  staticPageGenerationTimeout: 180,
  compiler: {
    emotion: true,
    styledComponents: {
      displayName: true,
      ssr: true,
      minify: true,
    },
    // Optional: Add new v15 compiler optimizations
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Images optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: false,
    unoptimized: false,
  },
};

export default nextConfig;
