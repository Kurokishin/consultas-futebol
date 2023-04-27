import axios from "axios";
import HorarioInfo from "./components/HorarioInfo";
import JogadorInfo from "./components/JogadorInfo";

const API_URL = ' https://v3.football.api-sports.io';
const API_KEY = '46ed8fd6c632def794beadc08888eb54';

const getJogos = async () => {
  try {
    const response = await axios.get(`https://v3.football.api-sports.io/fixtures?league=39&season=2021&next=10`, {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export {getJogos};