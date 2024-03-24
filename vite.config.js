import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/cv-dynamic/",
  server: {
    proxy: {
      '/api': {
        target: 'https://api.46elks.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  }
})
