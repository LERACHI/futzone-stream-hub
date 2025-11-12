// src/pages/jogos.tsx
import { useEffect, useState } from "react";
import { getMatchesToday, getMatchesFuture, LEAGUES } from "@/services/matches";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import TeamDisplay from "@/components/TeamDisplay";
import { Match as MatchType } from "@/pages/jogos";

const Jogos = () => {
  const [selectedLeague, setSelectedLeague] = useState(LEAGUES.BRASILEIRAO);
  const [todayMatches, setTodayMatches] = useState<MatchType[]>([]);
  const [futureMatches, setFutureMatches] = useState<MatchType[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Função para ajustar os logos dos times
  const fixTeamLogos = (matches: MatchType[]): MatchType[] => {
    return matches.map((match) => ({
      ...match,
      home_team: {
        ...match.home_team,
        logo_url: match.home_team.logo_url.split("/").pop() || "default.png",
      },
      away_team: {
        ...match.away_team,
        logo_url: match.away_team.logo_url.split("/").pop() || "default.png",
      },
    }));
  };

  useEffect(() => {
    async function fetchMatches() {
      setLoading(true);
      setTodayMatches([]);
      setFutureMatches([]);

      const [today, future] = await Promise.all([
        getMatchesToday(selectedLeague.id),
        getMatchesFuture(selectedLeague.id),
      ]);

      // 🔹 Aplicando o mapeamento para os logos
      setTodayMatches(fixTeamLogos(today));
      setFutureMatches(fixTeamLogos(future));
      setLoading(false);
    }
    fetchMatches();
  }, [selectedLeague]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
        <p className="mt-3 text-muted-foreground">
          Carregando partidas de {selectedLeague.nome}...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white px-6 py-12">
      {/* 🎯 TÍTULO PRINCIPAL */}
      <motion.div
        className="relative text-center mb-12 select-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center gap-4 text-5xl font-extrabold bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 text-white bg-clip-text drop-shadow-[0_0_12px_rgba(0,255,100,0.6)]">
          <motion.img
            src="/imagens/meu-logo.svg"
            alt="FutZone Logo"
            className="w-14 h-14 object-contain"
            initial={{ rotate: -20, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          />
          <motion.span
            className="relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Partidas em Destaque
          </motion.span>
        </div>

        <div className="absolute left-1/2 top-full w-[300px] h-[60px] -translate-x-1/2 bg-gradient-to-b from-emerald-300/30 to-transparent blur-xl opacity-40" />
      </motion.div>

      {/* 🏆 SELETOR DE LIGAS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.values(LEAGUES).map((league) => (
          <motion.button
            key={league.id}
            onClick={() => setSelectedLeague(league)}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full border transition-all ${
              selectedLeague.id === league.id
                ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/30"
                : "border-zinc-600 text-zinc-300 hover:text-white hover:border-emerald-400"
            }`}
          >
            {league.nome}
          </motion.button>
        ))}
      </div>

      {/* 🧱 GRID DE JOGOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Jogos de Hoje */}
        <div className="space-y-6">
          <motion.div
            className="flex flex-col items-center justify-center mb-6 select-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 text-white bg-clip-text drop-shadow-[0_0_12px_rgba(0,255,100,0.6)]">
              Jogos de Hoje
            </h2>
            <div className="w-40 h-2 mt-1 bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 rounded-full opacity-50 blur-md" />
          </motion.div>

          {todayMatches.length === 0 ? (
            <p className="text-zinc-400">Nenhuma partida encontrada.</p>
          ) : (
            todayMatches.map((match) => (
              <motion.div
                key={match.id}
                className="bg-zinc-800/60 backdrop-blur-xl rounded-2xl p-4 border border-zinc-700 shadow-md transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-zinc-400">
                    {match.status === "FINALIZADO"
                      ? "Encerrado"
                      : match.status === "AO_VIVO"
                      ? "Ao vivo 🔴"
                      : "Pré-jogo"}
                  </span>
                  <span className="text-sm text-zinc-400">{match.time}</span>
                </div>

                <div className="flex justify-between items-center">
                  <TeamDisplay team={match.home_team} />
                  <span className="text-2xl font-bold text-zinc-100">
                    {match.home_team.score} - {match.away_team.score}
                  </span>
                  <TeamDisplay team={match.away_team} />
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Próximos Jogos */}
        <div className="space-y-6">
          <motion.div
            className="flex flex-col items-center justify-center mb-6 select-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-400 text-white bg-clip-text drop-shadow-[0_0_12px_rgba(0,200,255,0.6)]">
              Próximos Jogos
            </h2>
            <div className="w-40 h-2 mt-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-400 rounded-full opacity-50 blur-md" />
          </motion.div>

          {futureMatches.length === 0 ? (
            <p className="text-zinc-400">Nenhum jogo futuro encontrado.</p>
          ) : (
            futureMatches.map((match) => (
              <motion.div
                key={match.id}
                className="bg-zinc-800/60 backdrop-blur-xl rounded-2xl p-4 border border-zinc-700 shadow-md transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-zinc-400">Agendado</span>
                  <span className="text-sm text-zinc-400">
                    {new Date(match.time).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <TeamDisplay team={match.home_team} />
                  <span className="text-xl font-semibold text-zinc-100">vs</span>
                  <TeamDisplay team={match.away_team} />
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Jogos;
