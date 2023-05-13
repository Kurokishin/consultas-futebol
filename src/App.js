import React, { useState } from 'react';
import SearchBar from './components/barraPesquisa';
import GetPlayerInfo from './components/jogadorInfo'

const App = () => {
  const [playerName, setPlayerName] = useState('');
  const handleSearch = jogador => {
    setPlayerName(jogador);
  };

  return (
    <div>
      <h1>Aplicação de estatísticas esportivas</h1>
      <SearchBar onSearch={handleSearch} />
      <GetPlayerInfo jogador={playerName}/>
    </div>
  );
};

export default App;