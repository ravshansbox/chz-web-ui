import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
const config = {
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
