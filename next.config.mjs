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
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Optimizaciones de rendimiento
  experimental: {
    optimizeCss: true,
  },
  // Comprimir respuestas
  compress: true,
  // Optimizar para producción
  productionBrowserSourceMaps: false,
  // Minimizar JavaScript
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
