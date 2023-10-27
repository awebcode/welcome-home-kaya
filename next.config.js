/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "picsum.photos", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig
