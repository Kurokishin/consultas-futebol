import HorarioInfo from "./components/HorarioInfo";
import JogadorInfo from "./components/JogadorInfo";
import JogosData from "./components/JogosData";
import React, { useState } from 'react';
import axios from 'axios';
import { getJogos } from './api.js';

// Este código criará uma rota para os componentes "HorarioInfo, JogadorID e JogosData"

function App() {
  // Usando o 'HorarioInfo' importado, definimos o 'horarioSelecionado' com valor 'null' usando o 'UseState'.
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null);
  const [jogos, setJogos] = useState([]);

  // Definimos um objeto 'horario' com algumas informações de exemplo para testar.
  const getHorario = async () => {
    try {
      const response = await axios.get('https://www.api-football.com/horario');
      setHorario(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Definimos um objeto 'jogador' com algumas informações.
  const getJogador = async () => {
    try {
      const response = await axios.get('https://www.api-football.com/jogador');
      setJogador(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Definimos o objeto getJogos para buscar diretamente da api via HTTP.
  const getJogos = async () => { 
    try {
      const response = await axios.get('https://www.api-football.com/');
      setJogos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Aqui criamos um botão para chamar as funções de selecionar horario e jogador e o busca jogos
  // Ao clicar no botão eles devem ser atualizados, caso não sejam nulos.
  return (
    <div>
      <h1>Minha aplicação de estatísticas esportivas</h1>

      <button onClick={getHorario}>Buscar horário</button>
      {horario && (
        <div>
          <h2>Horário:</h2>
          <p>{horario.nome}</p>
          <p>{horario.esporte}</p>
          <p>{horario.local}</p>
          <p>{horario.horarioInicio} - {horario.horarioTermino}</p>
        </div>
      )}

      <br />
      <button onClick={getJogador}>Buscar jogador</button>
      {jogador && (
        <div>
          <h2>Jogador:</h2>
          <p>{jogador.nome}</p>
          <p>{jogador.idade} anos</p>
          <p>Posição: {jogador.posicao}</p>
          <p>Time: {jogador.time}</p>
        </div>
      )}

      <br />
      <button onClick={getJogos}>Buscar jogos</button>
      {jogos.length > 0 && <JogosData jogos={jogos} />}
    </div>
  );
}

export default App;
