import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // dev server port
    open: true, // open browser on start
  },
  build: {
    outDir: "dist", // Capacitor expects web assets here
  },
  resolve: {
    alias: {
      "@": "/src", // optional: import paths like "@/pages/HomePage"
    },
  },
});
