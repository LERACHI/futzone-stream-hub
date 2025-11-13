// src/services/matches.ts
import axios from "axios";

export const LEAGUES = {
  BRASILEIRAO: { id: 71, nome: "Série A (Brasil 🇧🇷)" },
  LIBERTADORES: { id: 13, nome: "Copa Libertadores 🏆" },
  PREMIER: { id: 39, nome: "Premier League (Inglaterra 🏴)" },
  LALIGA: { id: 140, nome: "La Liga (Espanha 🇪🇸)" },
  SERIEA: { id: 135, nome: "Serie A (Itália 🇮🇹)" },
};

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://v3.football.api-sports.io";

const headers = {
  "x-apisports-key": API_KEY,
};

// 🔸 Datas conhecidas com jogos (para plano gratuito)
const CANDIDATE_DATES = [
  { season: 2021, date: "2021-12-12" },
  { season: 2022, date: "2022-05-22" },
  { season: 2022, date: "2022-08-14" },
  { season: 2023, date: "2023-04-30" },
  { season: 2023, date: "2023-05-28" },
];

export async function getMatchesByLeague(leagueId: number) {
  if (!API_KEY) {
    console.warn("⚠️ Nenhuma API Key detectada. Retornando null para modo demonstração.");
    return null;
  }

  for (const { season, date } of CANDIDATE_DATES) {
    console.log(`📅 Tentando buscar jogos da liga ${leagueId} (${season}) em ${date}...`);

    try {
      const response = await axios.get(`${API_URL}/fixtures`, {
        headers,
        params: { league: leagueId, season, date },
      });

      const matches = response.data?.response || [];

      if (matches.length > 0) {
        console.log(`✅ ${matches.length} jogos encontrados para ${season}/${date}`);
        return matches.map((match: any) => ({
          id: match.fixture.id,
          time: new Date(match.fixture.date).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          status:
            match.fixture.status.short === "FT"
              ? "FINALIZADO"
              : match.fixture.status.short === "NS"
              ? "PRE_JOGO"
              : "AO_VIVO",
          home_team: {
            name: match.teams.home.name,
            logo_url: match.teams.home.logo,
            score: match.goals.home ?? 0,
          },
          away_team: {
            name: match.teams.away.name,
            logo_url: match.teams.away.logo,
            score: match.goals.away ?? 0,
          },
        }));
      }
    } catch (error: any) {
      console.error("❌ Erro ao buscar jogos:", error.message || error);
      if (error.response?.status === 429) {
        console.warn("⏳ Limite de requisições atingido — ativando fallback local.");
      }
    }
  }

  console.warn("⚠️ Nenhum jogo encontrado ou erro na API. Retornando null para fallback.");
  return null;
}
