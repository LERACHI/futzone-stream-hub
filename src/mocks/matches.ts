// src/mocks/matches.ts
import { Match } from "@/pages/jogos";

export const mockTodayMatches: Match[] = [
  {
    id: "t1",
    time: "17:00",
    status: "PRE_JOGO",
    home_team: { name: "Atlético Madrid", logo_url: "/imagens/atm.png", score: 0 },
    away_team: { name: "Union St.-Gilloise", logo_url: "/imagens/union.png", score: 0 }
  },
  {
    id: "t2",
    time: "17:00",
    status: "PRE_JOGO",
    home_team: { name: "Liverpool", logo_url: "/imagens/liverpool.png", score: 0 },
    away_team: { name: "Real Madrid", logo_url: "/imagens/real.png", score: 0 }
  },
  {
    id: "t3",
    time: "14:45",
    status: "FINALIZADO",
    home_team: { name: "Napoli", logo_url: "/imagens/napoli.png", score: 2 },
    away_team: { name: "Eintracht Frankfurt", logo_url: "/imagens/frankfurt.png", score: 1 }
  }
];

export const mockFutureMatches: Match[] = [
  {
    id: "f1",
    time: "2025-11-20T17:00:00Z",
    status: "PRE_JOGO",
    home_team: { name: "Juventus", logo_url: "/imagens/juventus.png", score: 0 },
    away_team: { name: "Sporting CP", logo_url: "/imagens/sporting.png", score: 0 }
  },
  {
    id: "f2",
    time: "2025-11-21T17:00:00Z",
    status: "PRE_JOGO",
    home_team: { name: "Paris Saint-Germain", logo_url: "/imagens/psg.png", score: 0 },
    away_team: { name: "Bayern Munich", logo_url: "/imagens/bayern.png", score: 0 }
  }
];
