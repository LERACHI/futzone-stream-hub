// src/components/AllTeamsCards.tsx
import MatchCard from "@/components/MatchCard";

// Crie um array com os nomes e arquivos usando require.context ou import.meta.glob
// Em Next.js (Vite também) você pode usar import.meta.glob para importar imagens dinamicamente
const images = import.meta.glob("/public/imagens/*.{png,jpg,jpeg}", { eager: true });

const teams = Object.keys(images).map((path) => {
  const fileName = path.split("/").pop() || "";
  const name = fileName.replace(/\.(png|jpg|jpeg)$/i, "").replace(/-/g, " ");
  return { name, file: fileName };
});

export default function AllTeamsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
      {teams.map((team) => (
        <MatchCard key={team.file} teamName={team.name} logoFile={team.file} />
      ))}
    </div>
  );
}
