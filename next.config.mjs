/** @type {import('next').NextConfig} */
const nextConfig = {
  typeScript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
