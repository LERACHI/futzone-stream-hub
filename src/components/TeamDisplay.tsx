// src/components/TeamDisplay.tsx
import { motion } from "framer-motion";
import { Team } from "@/pages/jogos";
import { getImagePath } from "@/utils/getImagePath";

interface TeamDisplayProps {
  team: Team;
}

// Mapeamento dos nomes dos times para os arquivos corretos na pasta /public/imagens
const teamLogos: Record<string, string> = {
  "Bayern Munique": "bayern-munich.png",
  "Bayern Munich": "bayern-munich.png",
  "Real Madrid": "real-madrid.png",
  "Union St.-Gilloise": "union-st-gilloise.png",
  "Eintracht Frankfurt": "eintracht-frankfurt.png",
  "Atlético Madrid": "atletico-madrid.png",
  "Atlético de Madrid": "atletico-madrid.png",
  "Paris Saint-Germain": "paris-saint-germain.png",
  "Sporting CP": "sporting-cp.png",
  "Flamengo": "flamengo.png",
  "Sao Paulo": "sao-paulo.png",
  "Chapecoense": "chapeco.png",
  "Juventus": "juventus.png",
  "Liverpool": "liverpool.png",
  "Napoli": "napoli.png",
  "Bahia": "bahia.png",
  "Atlético-PR": "atletico-pr.png",
  "Palmeiras": "palmeiras.png",
  "Corinthians": "corinthians.png",
  "Grêmio": "gremio.png",
  "Vasco da Gama": "vasco-da-gama.png",
  "Santos": "santos.png",
  "Fluminense": "fluminense.png",
  "Internacional": "internacional.png",
  "Cruzeiro": "cruzeiro.png",
  "Botafogo": "botafogo.png",
  "Ceará": "ceara.png",
  "Fortaleza": "fortaleza.png",
   // Adicione mais times se necessário
};

const TeamDisplay = ({ team }: TeamDisplayProps) => {
  // Define o caminho da imagem usando o mapeamento
  const logoFileName = teamLogos[team.name] || team.logo_url || "default.png";
  const logoPath = team.logo_url.startsWith("http") ? team.logo_url : getImagePath(logoFileName);

  // Fallback caso a imagem não carregue
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = getImagePath("default.png");
  };

  return (
    <div className="flex flex-col items-center w-36 text-center">
      <motion.img
        src={logoPath}
        alt={team.name || "Time"}
        className="w-20 h-20 md:w-24 md:h-24 object-contain mb-2 drop-shadow-2xl"
        whileHover={{ scale: 1.15 }}
        onError={handleError} // fallback automático
      />
      <span className="text-sm md:text-base font-semibold text-zinc-200 drop-shadow-sm">
        {team.name || "Time"}
      </span>
    </div>
  );
};

export default TeamDisplay;
