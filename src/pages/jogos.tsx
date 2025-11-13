// src/pages/jogos.tsx
import { useEffect, useState } from "react";
import { getMatchesByLeague, LEAGUES } from "@/services/matches";
import { Loader2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import TeamDisplay from "@/components/TeamDisplay";

export interface MatchType {
  id: number;
  time: string;
  status: string;
  home_team: { name: string; logo_url: string; score: number };
  away_team: { name: string; logo_url: string; score: number };
}

const fakeMatches: Record<number, MatchType[]> = {
  [LEAGUES.BRASILEIRAO.id]: [
    {
      id: 1,
      time: "19:00",
      status: "PRE_JOGO",
      home_team: { name: "Flamengo", logo_url: "/imagens/times/flamengo.png", score: 0 },
      away_team: { name: "Palmeiras", logo_url: "/imagens/times/palmeiras.png", score: 0 },
    },
    {
      id: 2,
      time: "21:30",
      status: "PRE_JOGO",
      home_team: { name: "Corinthians", logo_url: "/imagens/times/corinthians.png", score: 0 },
      away_team: { name: "São Paulo", logo_url: "/imagens/times/saopaulo.png", score: 0 },
    },
  ],
  [LEAGUES.LIBERTADORES.id]: [
    {
      id: 3,
      time: "22:00",
      status: "AO_VIVO",
      home_team: { name: "River Plate", logo_url: "/imagens/times/river.png", score: 2 },
      away_team: { name: "Boca Juniors", logo_url: "/imagens/times/boca.png", score: 1 },
    },
  ],
};

const Jogos = () => {
  const [selectedLeague, setSelectedLeague] = useState(LEAGUES.BRASILEIRAO);
  const [matches, setMatches] = useState<MatchType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);
  const [showDemoNotice, setShowDemoNotice] = useState(false);

  const fixTeamLogos = (matches: MatchType[]): MatchType[] => {
    return matches.map((match) => ({
      ...match,
      home_team: { ...match.home_team, logo_url: match.home_team.logo_url?.split("/").pop() || "default.png" },
      away_team: { ...match.away_team, logo_url: match.away_team.logo_url?.split("/").pop() || "default.png" },
    }));
  };

  useEffect(() => {
    async function fetchMatches() {
      setLoading(true);
      setMatches([]);

      try {
        const matchesData = await getMatchesByLeague(selectedLeague.id);

        if (!matchesData || matchesData.length === 0) {
          console.warn("⚠️ Nenhum jogo encontrado — ativando modo demonstração.");
          setIsDemo(true);
          setShowDemoNotice(true);
          setMatches(fakeMatches[selectedLeague.id] || []);
        } else {
          setIsDemo(false);
          setMatches(fixTeamLogos(matchesData));
        }
      } catch (error) {
        console.error("❌ Erro ao buscar jogos:", error);
        setIsDemo(true);
        setShowDemoNotice(true);
        setMatches(fakeMatches[selectedLeague.id] || []);
      }

      setLoading(false);
    }

    fetchMatches();
  }, [selectedLeague]);

  // Oculta o aviso sutil após alguns segundos
  useEffect(() => {
    if (showDemoNotice) {
      const timer = setTimeout(() => setShowDemoNotice(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [showDemoNotice]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
        <p className="mt-3 text-muted-foreground">Carregando partidas...</p>
      </div>
    );
  }

  const todayMatches = matches.filter(
    (m) => m.status === "AO_VIVO" || m.status === "FINALIZADO"
  );
  const futureMatches = matches.filter((m) => m.status === "PRE_JOGO");

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white px-6 py-12 relative">
      {/* 🔹 Aviso sutil de modo demonstração */}
      {showDemoNotice && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-400/40 px-4 py-2 rounded-xl shadow-lg backdrop-blur-md text-sm"
        >
          <AlertCircle className="w-4 h-4" />
          <span>Modo demonstração — dados simulados</span>
        </motion.div>
      )}

      {/* HEADER */}
      <motion.div
        className="relative flex flex-col items-center mb-12 select-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-4">
          <motion.img
            src={
              window.location.hostname !== "localhost"
                ? "/futzone-stream-hub/imagens/meu-logo.svg"
                : "/imagens/meu-logo.svg"
            }
            alt="FutZone Logo"
            className="w-14 h-14 object-contain"
            initial={{ rotate: -20, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          />

          <motion.span
            className="text-5xl font-extrabold bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 text-white bg-clip-text drop-shadow-[0_0_12px_rgba(0,255,100,0.6)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Partidas em Destaque
          </motion.span>
        </div>
      </motion.div>

      {/* SELETOR DE LIGAS */}
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

      {/* GRID DE JOGOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Jogos de Hoje */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-400">Jogos de Hoje</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400">Próximos Jogos</h2>
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
                  <span className="text-sm text-zinc-400">{match.time}</span>
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
