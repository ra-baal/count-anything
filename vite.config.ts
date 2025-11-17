import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // relative paths for Capacitor (file://)
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
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
