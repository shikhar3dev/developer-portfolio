/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/developer-portfolio", // Replace with your GitHub repo name
  assetPrefix: "/developer-portfolio/",
};

module.exports = nextConfig;
