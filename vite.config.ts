import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`, // Necesario para JSX, según tu configuración
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
