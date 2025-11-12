// src/components/TeamDisplay.tsx
import { motion } from "framer-motion";
import { Team } from "@/pages/jogos";
import { getImagePath } from "@/utils/getImagePath";

interface TeamDisplayProps {
  team: Team;
}

const TeamDisplay = ({ team }: TeamDisplayProps) => {
  // Define o caminho do logo usando o helper
  const logoPath =
    team.logo_url && team.logo_url.startsWith("http")
      ? team.logo_url
      : getImagePath(team.logo_url || "default.png");

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
        onError={handleError}
      />
      <span className="text-sm md:text-base font-semibold text-zinc-200 drop-shadow-sm">
        {team.name || "Time"}
      </span>
    </div>
  );
};

export default TeamDisplay;
