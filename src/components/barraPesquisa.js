import React, { useState } from 'react';
//import Botao from './botao'

// const BarraPesquisa = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(searchTerm);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input className='barraPesquisa'
//         type="text"
//         placeholder="Insira o nome do jogador"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <Botao />
//     </form>
//   );
// };

// export default BarraPesquisa;

const SearchBar = ({ onSearch }) => {
  const [playerName, setPlayerName] = useState('');

  const handleInputChange = event => {
    setPlayerName(event.target.value);
  };

  const handleSearch = () => {
    onSearch(playerName);
  };

  return (
    <div>
      <input className='barraPesquisa' type="text" value={playerName} onChange={handleInputChange} />
      <button className='botao' onClick={handleSearch}>Pesquisar</button>
    </div>
  );
};

export default SearchBar;