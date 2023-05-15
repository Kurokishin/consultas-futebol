import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetPlayerInfo = ({ searchQuery }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '3e0a856bd02675eba4ca1a26f3c5a98dbc1b1118c44f1dac567623de4af6e24a';
      const apiUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${searchQuery}&APIkey=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        const filteredPlayers = response.data.map(player => ({
          nome: player.player_name,
          time: player.team_name,
          foto: player.player_image,
          nacionalidade: player.player_country,
          qtdGolsMarcados: player.player_goals,
          posicao: player.player_type
        }));
        setPlayers(filteredPlayers);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <h1>Lista de jogadores</h1>
      {players.map(player => (
        <div key={player.nome}>
          <p className='nomeJogador'>Nome: {player.nome}</p>
          <p>Time: {player.time}</p>
          {player.foto && <img src={player.foto} alt={player.nome} />}
          <p>Posição: {player.posicao}</p>
          <p>Nacionalidade: {player.nacionalidade}</p>
          <p>Gols marcados: {player.qtdGolsMarcados}</p>
        </div>
      ))}
    </div>
  );
};

export default GetPlayerInfo;

// const GetPlayerInfo = () => {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const jogador = 'Cristiano Ronaldo'; // Replace with the player name you want to search
//       const apiKey = process.env.REACT_APP_API_KEY; // Replace with your actual API key
//       const apiUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${jogador}&APIkey=${apiKey}`;

//       try {
//         const response = await axios.get(apiUrl);
//         const filteredPlayers = response.data.map(player => ({
//           name: player.player_name,
//           team: player.team_name
//         }));
//         setPlayers(filteredPlayers);
//       } catch (error) {
//         console.error('Error fetching player data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Player List</h1>
//       {players.map(player => (
//         <div key={player.name}>
//           <p>Name: {player.name}</p>
//           <p>Team: {player.team}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GetPlayerInfo;

// const api = axios.create({
//   baseURL: `https://apiv3.apifootball.com/?APIkey=${apiKey}`
//   // headers: {
//   //   'x-rapidapi-host': 'v3.football.api-sports.io',
//   //   'x-rapidapi-key': apiKey,
//     //'Content-Type': 'application/json'
//   //}
// });

//export async function getPlayerInfo(nomeJogador) {
// export async function getPlayerInfo(jogador) {
//   // Fazer uma solicitação GET para a APIFootball para obter informações dos jogadores
//   axios.get(`https://apiv3.apifootball.com/?action=get_players&player_name=${jogador}&APIkey=${apiKey}`)
//   .then(response => {
//       // Verificar se a resposta tem pelo menos um jogador
//       if (response.data.length > 0) {
//           // console.log(response.data) // Retorna todos os dados do Jogador no formato padrão da API
//           // Navega em todos os resultados retornados pela API
//           response.data.forEach(jogador => {
//               // Grava em um JSON as informações desejadas do jogador retornado
//               const resposta = {
//                   nome: jogador.player_name, // String
//                   clube: jogador.team_name, // String
//                   posicao: jogador.player_type, // Forwards = Atacante || Midfielders = Meio-campista || Defenders = Defesa
//                   urlImagem: jogador.player_image, // 150px X 150px
//                   nacionalidade: jogador.player_country,
//                   jogosGanhos: jogador.player_duels_won,
//                   jogosTotais: jogador.player_duels_total,
//                   golsMarcados: jogador.player_goals,
//                   cartoesAmarelos: jogador.player_red_cards,
//                   cartoesVermelhos: jogador.player_yellow_cards
//                   //idade: jogador.player_age, // XX - int
//                   //nascimento: jogador.player_birthdate, // YYYY-MM-DD
//                   //numero: jogador.player_number, // XX - int
//               }

//               jsonJogadores.push(resposta);
//           });
//           // Retorna o array de JSONs
//           console.log(jsonJogadores)
//           return(jsonJogadores)
//       } else {
//           // Retorna se não for achado nenhum jogador com nome desejado
//           console.log(`Nenhum jogador correspondente encontrado para "${jogador}".`);
//           return(`Nenhum jogador correspondente encontrado para "${jogador}".`);
//       }
//   }).catch(error => {
//       // Retorna erro
//       console.log(error);
//       return(error);
//   });
// }

// getPlayerInfo('Cristiano Ronaldo')