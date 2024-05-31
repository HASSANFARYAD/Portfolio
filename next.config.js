/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc"
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
