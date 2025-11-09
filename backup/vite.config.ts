import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Pega o nome do repositório automaticamente (ou use manualmente)
const repoName = "futzone-stream-hub"; // troque pelo nome do seu repositório no GitHub

export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "./" : `/${repoName}/`,
  server: {
    host: "localhost",
    port: 5173,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
