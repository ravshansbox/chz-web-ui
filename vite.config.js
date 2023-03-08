import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
const config = {
  define: {
    VITE_APP_VERSION: JSON.stringify(process.env.npm_package_version),
    VITE_BUILD_TIMESTAMP: JSON.stringify(new Date().toLocaleString()),
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
