import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ⚡ Nome do seu repositório no GitHub
const repoName = "futzone-stream-hub";

// Detecta se estamos rodando localmente ou em build
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  // ⚡ Base dinâmica:
  // - localhost (dev): "./"
  // - build para GitHub Pages: "/futzone-stream-hub/"
  base: isProd ? `/${repoName}/` : "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
