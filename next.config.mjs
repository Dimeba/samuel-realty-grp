/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "downloads.ctfassets.net",
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1600],
  },
};

export default nextConfig;
