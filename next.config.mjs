/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://apspcl.codesignagency.in/api/api/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
