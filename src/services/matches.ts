// src/services/matches.ts
import axios from "axios";
import { Match } from "@/pages/jogos";
import { mockTodayMatches, mockFutureMatches } from "@/mocks/matches";

const BASE_URL = "https://v3.football.api-sports.io";
const API_KEY = "4c889c40b6bcb23c241c4db53a96bf56";

// ⚙️ Axios configurado
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-apisports-key": API_KEY,
  },
});

// ⚽ Ligas com IDs oficiais da API-Football
export const LEAGUES = {
  BRASILEIRAO: { id: 71, nome: "Brasileirão" },
  LIBERTADORES: { id: 13, nome: "Libertadores" },
  PREMIER: { id: 39, nome: "Premier League" },
  LALIGA: { id: 140, nome: "La Liga 🇪🇸" },
  SERIEA: { id: 135, nome: "Serie A 🇮🇹" },
};

// 🟢 Jogos de hoje
export async function getMatchesToday(leagueId: number): Promise<Match[]> {
  try {
    const today = new Date().toISOString().split("T")[0];
    const res = await api.get("/fixtures", {
      params: {
        league: leagueId,
        season: 2025,
        date: today,
      },
    });

    if (res.data?.response?.length) {
      return res.data.response.map((m: any) => ({
        id: m.fixture.id,
        time: new Date(m.fixture.date).toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status:
          m.fixture.status.short === "FT"
            ? "FINALIZADO"
            : m.fixture.status.short === "1H" ||
              m.fixture.status.short === "HT" ||
              m.fixture.status.short === "2H"
            ? "AO_VIVO"
            : "PRE_JOGO",
        home_team: {
          name: m.teams.home.name,
          logo_url: m.teams.home.logo,
          score: m.goals.home ?? 0,
        },
        away_team: {
          name: m.teams.away.name,
          logo_url: m.teams.away.logo,
          score: m.goals.away ?? 0,
        },
      }));
    }

    return mockTodayMatches;
  } catch (err) {
    console.warn("⚠️ Erro ao buscar jogos de hoje, usando mock local", err);
    return mockTodayMatches;
  }
}

// 🔵 Jogos futuros
export async function getMatchesFuture(leagueId: number): Promise<Match[]> {
  try {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const res = await api.get("/fixtures", {
      params: {
        league: leagueId,
        season: 2025,
        from: today.toISOString().split("T")[0],
        to: nextWeek.toISOString().split("T")[0],
      },
    });

    if (res.data?.response?.length) {
      return res.data.response.map((m: any) => ({
        id: m.fixture.id,
        time: m.fixture.date,
        status: "PRE_JOGO",
        home_team: {
          name: m.teams.home.name,
          logo_url: m.teams.home.logo,
          score: m.goals.home ?? 0,
        },
        away_team: {
          name: m.teams.away.name,
          logo_url: m.teams.away.logo,
          score: m.goals.away ?? 0,
        },
      }));
    }

    return mockFutureMatches;
  } catch (err) {
    console.warn("⚠️ Erro ao buscar jogos futuros, usando mock local", err);
    return mockFutureMatches;
  }
}
