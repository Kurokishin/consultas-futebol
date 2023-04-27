import axios from "axios";

const API_BASE_URL = "https://www.api.football.com/";

export const getHorario = (horarioId) => {
  return axios.get(`${API_BASE_URL}/horario/${horarioId}`);
};

export const getJogador = (jogadorId) => {
  return axios.get(`${API_BASE_URL}/jogador/${jogadorId}`);
};

export const getJogosData = (jogosDataID) => {
  return axios.get(`${API_BASE_URL}/jogosData/${jogosDataID}`);
};
