//Este componente será responsável por exibir quais jogos ou eventos 
//acontecem em uma determinada data escolhida pelo usuário.

import React from 'react';

function EventoInfo({ evento }) {
  return (
    <div>
      <h2>Informações do evento selecionado</h2>
      <p>Nome: {evento.nome}</p>
      <p>Esporte: {evento.esporte}</p>
      <p>Local: {evento.local}</p>
      <p>Data: {evento.data}</p>
      <p>Horário de início: {evento.horarioInicio}</p>
      <p>Horário de término: {evento.horarioTermino}</p>
    </div>
  );
}

export default EventoInfo;

  