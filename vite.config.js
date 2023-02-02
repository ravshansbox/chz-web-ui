import react from '@vitejs/plugin-react';
import { execSync } from 'node:child_process';

/** @type {import('vite').UserConfig} */
const config = {
  define: {
    VITE_APP_VERSION: JSON.stringify(process.env.npm_package_version),
    VITE_BUILD_TIMESTAMP: JSON.stringify(new Date().toISOString()),
    VITE_COMMIT_HASH: JSON.stringify(execSync('git rev-parse --short HEAD').toString()),
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};

export default config;
