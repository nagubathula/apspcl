/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*", // Ensure the backend is on this port
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
          // Consider adding other security headers like XSS protection, etc.
        ],
      },
    ];
  },

  // Optional: Configure Next.js to handle environment variables correctly
  env: {
    API_URL: "http://localhost:5000/api", // Update if your backend runs on a different port
  },

  // Optional: Configure build and performance settings
  images: {
    domains: ["localhost"], // Allows images from localhost for development
  },

  // Optional: Enable React Strict Mode
  reactStrictMode: true,
};

export default nextConfig;
