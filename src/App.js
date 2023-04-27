import HorarioInfo from "./components/HorarioInfo";
import JogadorInfo from "./components/JogadorInfo";
import JogosData from "./components/JogosData";
import React, { useState } from 'react';
import axios from 'axios';

// Este código criará uma rota para os componentes "HorarioInfo, JogadorID e JogosData" quando a 
// URL /horario/:horarioId for acessada. O parâmetro :horarioId é um parâmetro de
// rota que pode ser utilizado para buscar informações do horário selecionado na API.
// O mesmo ocorre com as URLs dos outros parametros informados (JogadorID e JogosData).

function App() {
  // Usando o 'HorarioInfo' importado, definimos o 'horarioSelecionado' com valor 'null' usando o 'UseState'.
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null);
  const [jogos, setJogos] = useState([]);

  const horario = { // Definimos um objeto 'horario' com algumas informações de exemplo para testar.
    nome: 'Horário 1',
    esporte: 'Futebol',
    local: 'Campo de Futebol',
    horarioInicio: '14:00',
    horarioTermino: '16:00',
  };

  const jogador = { // Definimos um objeto 'jogador' com algumas informações.
    nome: 'João',
    idade: 25,
    posicao: 'Atacante',
    time: 'Time A',
  };

  const getJogos = async () => {
    try {
      const response = await axios.get('https://www.api-football.com/');
      setJogos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // SelecionarHorario irá atualizar o estado 'horarioSelecionado' para o valor do objeto horario.
  const selecionarHorario = () => {
    setHorarioSelecionado(horario);
  };
  // Aqui criamos um botão para chamar a função 'selecionarHorario' e atualizar quando ele não for nulo.
  return (
    <div>
      <h1>Minha aplicação de estatísticas esportivas</h1>
      <button onClick={selecionarHorario}>Selecionar horário</button>
      {horarioSelecionado && <HorarioInfo horario={horarioSelecionado} />}
    </div>
  );

  // Codigo de teste deixei comentado por enquanto...
  // return (
  //   <Router>
  //     <Switch>
  //       <Route path="/Horario/:HorarioId">
  //         <HorarioInfo/>
  //       </Route>
  //       <Route path="/Jogador/:JogadorID">
  //         <JogadorInfo/>
  //       </Route>
  //       <Route path="/Jogos/:date">
  //         <JogosData/>
  //       </Route>
  //     </Switch>
  //   </Router>
  // );
}

export default App;
