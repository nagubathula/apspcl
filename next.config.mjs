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

  // Optional: Add security headers to prevent clickjacking and other attacks
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)", // Apply headers to all paths
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevent framing
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';", // Prevent framing
          },
        ],
      },
    ];
  },

  // Optional: Configure Next.js to handle environment variables correctly
  env: {
    // Add any environment variables you need here
    API_URL: "https://apspcl.codesignagency.in/api/api", // Example variable for the backend URL
  },

  // Optional: Configure build and performance settings
  images: {
    domains: ["localhost"], // Allows images from localhost for development
  },

  // Optional: Enable React Strict Mode
  reactStrictMode: true,
};

export default nextConfig;
