import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HorarioInfo from "./components/HorarioInfo";
import React from "react";
import JogadorInfo from "./components/JogadorInfo";
import JogosData from "./components/JogosData";

// Este código criará uma rota para os componentes "HorarioInfo, JogadorID e JogosData" quando a 
// URL /horario/:horarioId for acessada. O parâmetro :horarioId é um parâmetro de
// rota que pode ser utilizado para buscar informações do horário selecionado na API.
// O mesmo ocorre com as URLs dos outros parametros informados (JogadorID e JogosData).

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Horario/:HorarioId">
          <HorarioInfo/>
        </Route>
        <Route path="/Jogador/:JogadorID">
          <JogadorInfo/>
        </Route>
        <Route path="/Jogos/:date">
          <JogosData/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
