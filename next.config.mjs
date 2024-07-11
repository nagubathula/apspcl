/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://16.170.215.0:5000/api/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
