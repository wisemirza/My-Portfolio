import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // The three.js chunk is ~585 kB but is loaded lazily after first paint, so the warning is expected.
    chunkSizeWarningLimit: 700
  }
});
