// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google.com *.googleapis.com *.gstatic.com *.googletagmanager.com;
      style-src 'self' 'unsafe-inline' *.google.com *.googleapis.com;
      img-src 'self' data: blob: https://cdn.jsdelivr.net *.google.com *.gstatic.com images.unsplash.com *.googleapis.com *.ggpht.com *.googleusercontent.com maps.gstatic.com maps.googleapis.com;
      font-src 'self' data: *.gstatic.com;
      connect-src 'self' *.google.com *.googleapis.com *.google-analytics.com maps.googleapis.com maps.gstatic.com;
      frame-src 'self' *.google.com *.googleapis.com;
      frame-ancestors 'self';
      form-action 'self';
    `.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
];


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);