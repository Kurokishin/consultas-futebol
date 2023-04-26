import axios from "axios";

const API_BASE_URL = "https://www.api.football.com/";

export const getTeam = (teamId) => {
  return axios.get(`${API_BASE_URL}/teams/${teamId}`);
};

export const getPlayer = (playerId) => {
  return axios.get(`${API_BASE_URL}/players/${playerId}`);
};

export const getSchedule = (date) => {
  return axios.get(`${API_BASE_URL}/schedule/${date}`);
};
