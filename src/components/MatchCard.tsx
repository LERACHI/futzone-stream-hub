// src/components/MatchCard.tsx
import { motion } from "framer-motion";
import { Team, Match } from "@/pages/jogos";
import { getImagePath } from "@/utils/getImagePath"; // import do helper

interface MatchCardProps {
  match: Match;
  future?: boolean;
}

const MatchCard = ({ match, future = false }: MatchCardProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusText = () => {
    if (future) return "Agendado";
    switch (match.status) {
      case "FINALIZADO":
        return "Encerrado";
      case "AO_VIVO":
        return "Ao vivo 🔴";
      default:
        return "Pré-jogo";
    }
  };

  const isLive = match.status === "AO_VIVO" && !future;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      className="bg-gradient-to-br from-zinc-900/60 via-zinc-800/50 to-black/50 backdrop-blur-xl rounded-3xl p-6 border border-zinc-700 shadow-lg shadow-black/50 transition-all relative overflow-hidden"
    >
      {isLive && (
        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold text-white bg-red-600 rounded-full animate-pulse shadow-md">
          AO VIVO
        </span>
      )}

      <div className="flex justify-between items-center mb-6">
        <span
          className={`text-sm font-semibold ${
            future ? "text-blue-400" : isLive ? "text-red-500" : "text-green-400"
          }`}
        >
          {getStatusText()}
        </span>
        <span className="text-sm text-zinc-400">
          {future ? formatDate(match.time) : match.time}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <TeamDisplay team={match.home_team} />
        <span className="text-2xl font-bold text-zinc-100">
          {match.home_team.score} - {match.away_team.score}
        </span>
        <TeamDisplay team={match.away_team} />
      </div>
    </motion.div>
  );
};

const TeamDisplay = ({ team }: { team: Team }) => (
  <div className="flex flex-col items-center w-36 text-center">
    <motion.img
      // usa o helper para construir caminho correto
      src={team.logo_url.startsWith("http") ? team.logo_url : getImagePath(team.logo_url)}
      alt={team.name}
      className="w-20 h-20 md:w-24 md:h-24 object-contain mb-2 drop-shadow-2xl"
      whileHover={{ scale: 1.15 }}
    />
    <span className="text-sm md:text-base font-semibold text-zinc-200 drop-shadow-sm">
      {team.name}
    </span>
  </div>
);

export default MatchCard;
