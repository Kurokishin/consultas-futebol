import React, { useState } from 'react';
import SearchBar from './components/barraPesquisa';
import GetPlayerInfo from './components/jogadorInfo';
import GetTeamInfo from './components/timeInfo';
import GetDateInfo from './components/dateInfo';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPlayerInfo, setShowPlayerInfo] = useState(false);
  const [showTeamInfo, setShowTeamInfo] = useState(false);

  const handleSearch = query => {
    setSearchQuery(query);
    setShowPlayerInfo(true);
    setShowTeamInfo(true);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedDate(null);
    setShowPlayerInfo(false);
    setShowTeamInfo(false);
  };

  return (
    <div>
      <h1>Aplicação de estatísticas esportivas</h1>
      <SearchBar onSearch={handleSearch} onClear={clearSearch} />
      {showPlayerInfo && <GetPlayerInfo searchQuery={searchQuery} />}
      {showTeamInfo && <GetTeamInfo searchQuery={searchQuery} />}
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
