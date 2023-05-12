import React, { useState } from 'react';
import Botao from './botao'

const BarraPesquisa = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='barraPesquisa'
        type="text"
        placeholder="Insira o nome do jogador"
        value={searchTerm}
        onChange={handleChange}
      />
      <Botao />
    </form>
  );
};

export default BarraPesquisa;
