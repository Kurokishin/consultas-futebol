import axios from "axios";
import HorarioInfo from "./components/HorarioInfo";
import JogadorInfo from "./components/JogadorInfo";

const API_BASE_URL = "https://www.api.football.com/";

export const getHorario = (horarioId) => {
  return axios.get(`${API_BASE_URL}/horario/${horarioId}`);
};

export const getJogador = (jogadorId) => {
  return axios.get(`${API_BASE_URL}/jogador/${jogadorId}`);
};

export const getJogosData = (date) => {
  return axios.get(`${API_BASE_URL}/jogosData/${date}`);
};
