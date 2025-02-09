import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: '127.0.0.1:8000', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ' ')
      }
    }
  },
  plugins: [react()],
})
