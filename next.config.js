/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      'randomuser.me',
      'ui-avatars.com',
      'images.unsplash.com',
      'api.dicebear.com'
    ],
  },
};

export default nextConfig;