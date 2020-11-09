import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { Login } from "./pages";
import { Cadastro } from "./pages";
import { Home } from "./pages";
import { Perfil } from "./pages";
import { EditarPerfil } from "./pages";
import { Disciplinas } from "./pages";
import { Atividades } from "./pages";
import { CriarDisciplina } from "./pages";
import { CriarAtividade } from "./pages";
import { VerDisciplina } from "./pages";
import { VerAtividade } from "./pages";
import { EditarDisciplina } from "./pages";
import { EditarAtividade } from "./pages";

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
