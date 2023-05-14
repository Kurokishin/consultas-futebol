import React, { useState } from 'react';
import SearchBar from './components/barraPesquisa';
import GetPlayerInfo from './components/jogadorInfo'
import GetTeamInfo from './components/timeInfo'

const App = () => {
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Aplicação de estatísticas esportivas</h1>
      <SearchBar onSearch={handleSearch} />
      <GetPlayerInfo searchQuery={searchQuery}/>
      <GetTeamInfo searchQuery={searchQuery} />
    </div>
  );
};

export default App;