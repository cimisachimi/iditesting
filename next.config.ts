import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.google.com https://*.googleapis.com https://*.google-analytics.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https://api.indocharcoalsupply.com http://localhost:8000 https://*.google-analytics.com;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://api.indocharcoalsupply.com http://localhost:3000 http://127.0.0.1:3000 https://*.google.com https://*.googleapis.com https://*.google-analytics.com https://maps.googleapis.com https://maps.gstatic.com;
            `.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
