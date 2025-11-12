// src/utils/getImagePath.ts
export const getImagePath = (filename: string) => {
  // Detecta se está no GitHub Pages
  const isGitHubPages = window.location.hostname.includes("github.io");
  const basePath = isGitHubPages ? "/futzone-stream-hub" : "";
  return `${basePath}/imagens/${filename}`;
};
