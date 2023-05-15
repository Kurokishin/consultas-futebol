// Este componente será responsável por exibir informações gerais e
// estatísticas sobre uma data escolhida pelo usuário.

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const GetDateInfo = ({ searchQuery }) => {
  const [datas, setDatas] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '3e0a856bd02675eba4ca1a26f3c5a98dbc1b1118c44f1dac567623de4af6e24a';
      const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : '';
      const apiUrl = `https://apiv3.apifootball.com/?action=get_events&from=${formattedDate}&to=${formattedDate}&APIkey=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        const filteredDates = response.data.map(pais => ({
          nomePais: pais.country_name,
          nomeLiga: pais.league_name,
          dataPartida: pais.match_date,
          horaPartida: pais.match_time,
          timeLocal: pais.match_hometeam_name,
          timeLocalPlacar: pais.match_hometeam_score,
          timeAdversario: pais.match_awayteam_name,
          timeAdversarioPlacar: pais.match_awayteam_score,
        }));
        setDatas(filteredDates);
      } catch (error) {
        console.error('Error fetching date data:', error);
      }
    };

    fetchData();
  }, [searchQuery, selectedDate]);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Select Date:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        isClearable
      />

      {datas.length === 0 ? (
        <p>No data available for the selected date.</p>
      ) : (
        datas.map(pais => (
        <div>
          <p>País sede: {pais.nomePais}</p>
          <p>Liga: {pais.nomeLiga}</p>
          <p>Data da partida: {pais.dataPartida}</p>
          <p>Hora da partida: {pais.horaPartida}</p>
          <p>Time local: {pais.timeLocal}</p>
          <h3>Placar: {pais.timeLocalPlacar}</h3>
          <p>Time adversário: {pais.timeAdversario}</p>
          <h3>Placar: {pais.timeAdversarioPlacar}</h3>
        </div>
        ))
      )}
    </div>
  );
};

export default GetDateInfo;

