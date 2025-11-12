// src/pages/jogos.tsx
import { useEffect, useState } from "react";
import { getMatchesToday, getMatchesFuture, LEAGUES } from "@/services/matches";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import MatchCard from "@/components/MatchCard";

export interface Team {
  name: string;
  logo_url: string;
  score: number;
}

export interface Match {
  id: string;
  time: string;
  status: string;
  home_team: Team;
  away_team: Team;
}

const Jogos = () => {
  const [selectedLeague, setSelectedLeague] = useState(LEAGUES.BRASILEIRAO);
  const [todayMatches, setTodayMatches] = useState<Match[]>([]);
  const [futureMatches, setFutureMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMatches() {
      setLoading(true);

      // 🔹 Limpar dados antigos para evitar repetição
      setTodayMatches([]);
      setFutureMatches([]);

      console.log("Buscando jogos para a liga:", selectedLeague.nome, selectedLeague.id);

      const [today, future] = await Promise.all([
        getMatchesToday(selectedLeague.id),
        getMatchesFuture(selectedLeague.id),
      ]);

      setTodayMatches(today);
      setFutureMatches(future);
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
            todayMatches.map((match) => <MatchCard key={match.id} match={match} />)
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
            futureMatches.map((match) => <MatchCard key={match.id} match={match} future />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Jogos;
