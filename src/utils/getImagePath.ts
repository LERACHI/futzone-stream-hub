// src/utils/getImagePath.ts

/**
 * Retorna o caminho correto da imagem dependendo do ambiente.
 * Funciona no localhost e no GitHub Pages.
 *
 * @param fileName Nome do arquivo da imagem (ex: "atletico-madrid.png")
 */
export const getImagePath = (fileName: string) => {
  // Nome do repositório no GitHub Pages
  const repoName = "futzone-stream-hub";

  // Se estiver no GitHub Pages, adiciona o nome do repo antes do caminho
  if (window.location.hostname !== "localhost") {
    return `/${repoName}/imagens/${fileName}`;
  }

  // No localhost, usa caminho relativo padrão
  return `/imagens/${fileName}`;
};
