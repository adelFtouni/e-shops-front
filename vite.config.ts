import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/e-shops-front/",
  server: {
    port: 5173
  }
});
