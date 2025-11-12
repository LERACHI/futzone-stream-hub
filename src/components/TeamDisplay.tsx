// src/components/TeamDisplay.tsx
import { motion } from "framer-motion";
import { Team } from "@/pages/jogos";

interface TeamDisplayProps {
  team: Team;
}

const TeamDisplay = ({ team }: TeamDisplayProps) => {
  // Se team.logo_url começar com "http", usa direto, senão procura em /imagens/
  const logoSrc = team.logo_url.startsWith("http")
    ? team.logo_url
    : `/imagens/${team.logo_url}`;

  return (
    <div className="flex flex-col items-center w-32 text-center">
      <motion.img
        src={logoSrc}
        alt={team.name}
        className="w-20 h-20 md:w-24 md:h-24 object-contain mb-2 drop-shadow-2xl"
        whileHover={{ scale: 1.15 }}
      />
      <span className="text-sm font-medium text-zinc-200">{team.name}</span>
    </div>
  );
};

export default TeamDisplay;
