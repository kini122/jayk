/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // allow preview/proxy origins (e.g. Builder preview on fly.dev) to request dev assets
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://*.fly.dev',
    'https://*.vercel.app'
  ],
}

export default nextConfig
