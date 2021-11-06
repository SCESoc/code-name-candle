/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['https://cdn.skypack.dev/'],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
}
