/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3q0oijmiduzg2.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'd322abd807wvow.cloudfront.net',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  turbopack: {
    root: '/home/rubanza/work/my_website_claude',
  },
}

module.exports = nextConfig