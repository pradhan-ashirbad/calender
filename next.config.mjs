/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // geomysore.com rejects server-side image fetches, so external images are
    // loaded directly by the browser instead of through the Next optimizer.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.geomysore.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
