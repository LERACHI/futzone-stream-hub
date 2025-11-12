// src/components/TeamDisplay.tsx
import { motion } from "framer-motion";
import { Team } from "@/pages/jogos";

interface TeamDisplayProps {
  team: Team;
}

const TeamDisplay = ({ team }: TeamDisplayProps) => {
  // Caminho padrão do logo
  const logoPath = team.logo_url.startsWith("http")
    ? team.logo_url
    : `/imagens/${team.logo_url}`;

  // fallback caso o logo não exista
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/imagens/default.png";
  };

  return (
    <div className="flex flex-col items-center w-36 text-center">
      <motion.img
        src={logoPath}
        alt={team.name}
        className="w-20 h-20 md:w-24 md:h-24 object-contain mb-2 drop-shadow-2xl"
        whileHover={{ scale: 1.15 }}
        onError={handleError} // ← substitui por default.png se falhar
      />
      <span className="text-sm md:text-base font-semibold text-zinc-200 drop-shadow-sm">
        {team.name}
      </span>
    </div>
  );
};

export default TeamDisplay;
