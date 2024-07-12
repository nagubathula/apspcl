/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://16.171.16.149:5000/api/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
