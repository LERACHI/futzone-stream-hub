import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// Detecta automaticamente se está rodando no GitHub Pages
const isGitHubPages = window.location.hostname.includes("github.io");
const repoName = "futzone-stream-hub";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={isGitHubPages ? `/${repoName}/` : "/"}>
    <App />
  </BrowserRouter>
);
