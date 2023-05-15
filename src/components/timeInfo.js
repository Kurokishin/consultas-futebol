import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetTeamInfo = ({ searchQuery }) => {
    const [teams, setTeams] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const apiKey = '3e0a856bd02675eba4ca1a26f3c5a98dbc1b1118c44f1dac567623de4af6e24a';
        const apiUrl = `https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=${apiKey}`;
  
        try {
          const response = await axios.get(apiUrl);
          const filteredTeams = response.data.map(team => ({
            team_id: team.team_id,
            name: team.team_name,
            badge: team.team_badge,
            players: team.players.map(player => ({
              player_id: player.player_id,
              player_image: player.player_image,
              player_name: player.player_name,
            })),
          }));
  
          const matchedTeams = filteredTeams.filter(team =>
            team.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
  
          setTeams(matchedTeams);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      // Renderiza times se eles existirem nos dados da API
      if (searchQuery) {
        fetchData();
      } else {
        setTeams([]);
      }
    }, [searchQuery]);
  
    return (
        <div>
          {teams.map(team => (
            <div key={team.team_id}>
              <h1>Time</h1>
              <p>Nome: {team.name}</p>
              {team.badge && <img src={team.badge} alt={team.name} />}
              <h2>Jogadores</h2>
              {team.players.map(player => (
                <div key={player.player_id}>
                  <p>Nome: {player.player_name}</p>
                  {player.player_image && <img src={player.player_image} alt={player.player_name} />}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    };
  
  export default GetTeamInfo;