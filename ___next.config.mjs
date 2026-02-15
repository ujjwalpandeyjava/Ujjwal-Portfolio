import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    additionalData: `@use "variables_utils" as *;`,
  },
};

export default nextConfig;