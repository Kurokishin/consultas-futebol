import React, { useState } from 'react';
import SearchBar from './components/barraPesquisa';
import GetPlayerInfo from './components/jogadorInfo';
import GetTeamInfo from './components/timeInfo';
import GetDateInfo from './components/dateInfo';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Aplicação de estatísticas esportivas</h1>
      <SearchBar onSearch={handleSearch} />
      <GetPlayerInfo searchQuery={searchQuery} />
      <GetTeamInfo searchQuery={searchQuery} />
      <GetDateInfo
        searchQuery={searchQuery}
        dataInicial={selectedDate}
        dataFinal={selectedDate}
        onDateChange={handleDateChange}
      />
    </div>
  );
};

export default App;