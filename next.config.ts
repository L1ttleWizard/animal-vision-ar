import type { NextConfig } from "next";

// When deploying to GitHub Pages we serve the site from a subpath
// (https://<user>.github.io/animal-vision-ar). The build sets
// NEXT_PUBLIC_BASE_PATH=/animal-vision-ar so client links and assets
// resolve correctly. Locally (npm run dev) it stays empty so everything
// works on http://localhost:3000.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  // Static export needs trailingSlash so /chats/cat-club → /chats/cat-club/index.html
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
