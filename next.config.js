/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'd3q0oijmiduzg2.cloudfront.net',
      'd322abd807wvow.cloudfront.net'
    ],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig