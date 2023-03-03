const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "/404",
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  i18n: {
    localeDetection: true,
    locales: ['en', 'pt']
  }
}


module.exports = { nextConfig }
