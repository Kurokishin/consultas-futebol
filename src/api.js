import axios from 'axios';

const API_KEY = "46ed8fd6c632def794beadc08888eb54";

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': API_KEY,
    'Content-Type': 'application/json',
  },
});

export const fetchTeamInfo = async (teamId) => {
  const response = await api.get(`teams?id=${teamId}`);
  return response.data;
};

export const fetchPlayerInfo = async (playerId) => {
  const response = await api.get(`players?id=${playerId}`);
  return response.data;
};

export const fetchFixturesByDate = async (date) => {
  const response = await api.get(`fixtures?date=${date}`);
  return response.data;
};

export const fetchPlayerByName = async (name) => {
  const response = await api.get(`players?search=${name}&league=39&season=2022`);
  return response.data;
};

export const fetchTeamByName = async (name) => {
  const response = await api.get(`teams?search=${name}&league=39&season=2022`);
  return response.data;
};

export const fetchPlayersByTeam = async (teamId) => {
  const response = await api.get(`players?team=${teamId}`);
  return response.data;
};

export const fetchTeamsByLeague = async (leagueId) => {
  const response = await api.get(`teams?league=${leagueId}`);
  return response.data;
};

export const fetchLeagueInfo = async (leagueId) => {
  const response = await api.get(`leagues?id=${leagueId}`);
  return response.data;
};

export const getJogos = async () => {
  const response = await api.get('fixtures?league=39&season=2022');
  return response.data;
};
