//Este componente será responsável por exibir informações gerais e estatísticas 
//sobre um jogador escolhido pelo usuário.

import React from 'react';

function JogadorInfo({ jogador }) {
  return (
    <div>
      <h2>Informações do jogador selecionado</h2>
      <p>Nome: {jogador.nome}</p>
      <p>Esporte: {jogador.esporte}</p>
      <p>Posição: {jogador.posicao}</p>
      <p>Número da camisa: {jogador.numeroCamisa}</p>
      <p>Time: {jogador.time}</p>
    </div>
  );
}

export default JogadorInfo;

  