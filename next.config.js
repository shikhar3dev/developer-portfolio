/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/developer-portfolio", // Replace with your GitHub repo name
  assetPrefix: "/developer-portfolio/",
};

module.exports = nextConfig;
