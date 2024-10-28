import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: command === "build" ? "/landscaping-company/" : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
});
