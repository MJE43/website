import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
// @ts-expect-error - Tailwind CSS v4 Vite plugin may have incomplete type declarations
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
