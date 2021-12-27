import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const viteEnv = {}
Object.keys(process.env).forEach((key) => {
  if (key.startsWith(`VITE_`)) {
    viteEnv[`import.meta.env.${key}`] = process.env[key]
  }
})

module.exports = defineConfig({
  base: './',
  root: './src',
  build: {
    outDir: '../build',
    emptyOutDir: true
  },
  plugins: [react()],
  define: viteEnv,
  server: {
    fs: {
      strict: true
    }
  },
  test: {
    environment: 'jsdom'
  }
})
