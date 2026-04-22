
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path, { resolve } from "path";

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname,'./src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'docs',
      rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        en: resolve(__dirname, 'en/index.html'),
      },
    },
    },
    server: {
      port: 3000,
      open: true,
    },
  });