/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
        pathname:"/**/*",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
