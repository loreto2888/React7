import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/React7/' : '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
}))
