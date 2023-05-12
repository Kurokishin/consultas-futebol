import React, { useState } from 'react';
// import axios from 'axios';
// import { fetchTeamInfo, fetchPlayerInfo, fetchFixturesByDate } from "./api";
// import JogadorInfo from "./components/JogadorInfo";
// import HorarioInfo from "./components/HorarioInfo";
// import JogosData from "./components/JogosData";
import BarraPesquisa from './components/barraPesquisa';

const App = () => {
  const handleSearch = (searchTerm) => {
    // Perform search logic with the search term
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      <h1>Aplicação de estatísticas esportivas</h1>
      <BarraPesquisa onSearch={handleSearch} />
    </div>
  );
};

export default App;

// function App() {
//   const [horario, setHorario] = useState(null);
//   const [jogador, setJogador] = useState(null);
//   const [jogos, setJogos] = useState([]);
//   const [playerInfo, setPlayerInfo] = useState(null);
//   const [fixtures, setFixtures] = useState([]);


//   const buscarHorario = async () => {
//     try {
//       const response = await axios.get('https://www.api-football.com/horario');
//       setHorario(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const buscarJogador = async () => {
//     try {
//       const response = await axios.get('https://www.api-football.com/jogador');
//       setJogador(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const buscarJogos = async () => {
//     try {
//       const response = await fetchFixturesByDate('2023-04-27');
//       setJogos(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const buscarJogadorPorId = async (playerId) => {
//     try {
//       const response = await fetchPlayerInfo(playerId);
//       setPlayerInfo(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const buscarJogosPorTime = async (teamId) => {
//     try {
//       const response = await fetchFixturesByDate('2023-04-27', teamId);
//       setFixtures(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Aplicação de estatísticas esportivas</h1>
  
//       <button onClick={buscarHorario}>Buscar horário</button>
//       {horario && (
//         <div>
//           <h2>Horário:</h2>
//           <HorarioInfo horario={horario} />
//         </div>
//       )}
  
//       <br />
//       <button onClick={buscarJogador}>Buscar jogador</button>
//       {jogador && (
//         <div>
//           <h2>Jogador:</h2>
//           <JogadorInfo jogador={jogador} />
//         </div>
//       )}
  
//       <br />
//       <button onClick={buscarJogos}>Buscar jogos</button>
//       {jogos.length > 0 && <JogosData jogos={jogos} />}
//     </div>
//   );
//       }
//       export default App;
