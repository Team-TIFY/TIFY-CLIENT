import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [react()],
  assetsInclude:['**/*.jpg'],
  resolve: {
    alias: [
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@libs', replacement: '/src/libs' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@styles', replacement: '/src/styles'},
      { find: '@utils', replacement: '/src/utils'},
    ],
  },
})
