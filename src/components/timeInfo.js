import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetTeamInfo = ({ searchQuery }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const apiUrl = `https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        const filteredTeams = response.data.map(team => ({
          nome: team.team_name,
          foto: team.team_badge,
        }));

        // Sort teams by name
        filteredTeams.sort((a, b) => a.nome.localeCompare(b.nome));

        setTeams(filteredTeams);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    // Recupera dados somente quando um time pesquisado é válido
    if (searchQuery) {
        fetchData();
      } else {
        setTeams([]);
      }
  }, [searchQuery]);

  const filteredTeams = teams.filter(team =>
    team.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de times</h1>
      {filteredTeams.map(team => (
        <div key={team.nome}>
          <p>Nome do time: {team.nome}</p>
          {team.foto && <img src={team.foto} alt={team.nome} />}
        </div>
      ))}
    </div>
  );
};

// const GetTeamInfo = ({ time }) => {
//   const [teams, setTeams] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const apiKey = process.env.REACT_APP_API_KEY;
//       const apiUrl = `https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=${apiKey}`;

//       try {
//         const response = await axios.get(apiUrl);
//         const filteredTeams = response.data.map(team => ({
//           nome: team.team_name,
//           foto: team.team_badge,
//         }));
//         setTeams(filteredTeams);
//       } catch (error) {
//         console.error('Error fetching team data:', error);
//       }
//     };

//     fetchData();
//   }, [time]);

//   return (
//     <div>
//       <h1>Lista de times</h1>
//       {teams.map(team => (
//         <div key={team.nome}>
//           <p>Nome do time: {team.nome}</p>
//           {team.foto && <img src={team.foto} alt={team.nome} />}
//         </div>
//       ))}
//     </div>
//   );
// };

export default GetTeamInfo;