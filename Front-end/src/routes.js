import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { Perfil } from "./pages/Perfil";
import { EditarPerfil } from "./pages/EditarPerfil";
import { Disciplinas } from "./pages/Disciplinas";
import { Atividades } from "./pages/Atividades";
import { CriarDisciplina } from "./pages/CriarDisciplina";
import { CriarAtividade } from "./pages/CriarAtividade";
import { VerDisciplina } from "./pages/VerDisciplina";
import { VerAtividade } from "./pages/VerAtividade";
import { EditarDisciplina } from "./pages/EditarDisciplina";
import { EditarAtividade } from "./pages/EditarAtividade";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/cadastro" component={Cadastro} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/perfil" component={Perfil} exact />
      <Route path="/perfil/edit" component={EditarPerfil} exact />
      <Route path="/disciplinas" component={Disciplinas} exact />
      <Route path="/atividades" component={Atividades} exact />
      <Route path="/disciplinas/create" component={CriarDisciplina} exact />
      <Route path="/atividades/create" component={CriarAtividade} exact />
      <Route
        path="/disciplinas/:disciplinaID"
        component={VerDisciplina}
        exact
      />
      <Route path="/atividades/:atividadeID" component={VerAtividade} exact />
      <Route
        path="/disciplinas/:disciplinaID/edit"
        component={EditarDisciplina}
        exact
      />
      <Route
        path="/atividades/:atividadeID/edit"
        component={EditarAtividade}
        exact
      />
    </BrowserRouter>
  );
};

export default Routes;
