// Este componente será responsável por exibir informações gerais e
// estatísticas sobre um horário escolhido pelo usuário.

import React from 'react';

function HorarioInfo({ horario }) {
  return (
    <div>
      <h2>Informações do horário selecionado</h2>
      <p>Nome: {horario.nome}</p>
      <p>Esporte: {horario.esporte}</p>
      <p>Local: {horario.local}</p>
      <p>Horário de início: {horario.horarioInicio}</p>
      <p>Horário de término: {horario.horarioTermino}</p>
    </div>
  );
}

export default HorarioInfo;

  