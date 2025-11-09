import { defineConfig } from 'vite';
import markdown from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [markdown()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'src/index.md',
        // tambahkan halaman lain jika perlu
      }
    }
  },
  publicDir: 'public'
});
