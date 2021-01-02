import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { Login } from "./Login/Login";
import { CriarPerfil } from "./Perfil/CriarPerfil/CriarPerfil";
import { Home } from "./Home/Home";
import { VerPerfil } from "./Perfil/VerPerfil/VerPerfil";
import { EditarPerfil } from "./Perfil/EditarPerfil/EditarPerfil";
import { Disciplinas } from "./Disciplinas/ListagemDisciplinas/Disciplinas";
import { Atividades } from "./Atividades/ListagemAtividades/Atividades";
import { CriarDisciplina } from "./Disciplinas/CriarDisciplina/CriarDisciplina";
import { CriarAtividade } from "./Atividades/CriarAtividade/CriarAtividade";
import { VerDisciplina } from "./Disciplinas/VerDisciplina/VerDisciplina";
import { VerAtividade } from "./Atividades/VerAtividade/VerAtividade";
import { EditarDisciplina } from "./Disciplinas/EditarDisciplina/EditarDisciplina";
import { EditarAtividade } from "./Atividades/EditarAtividade/EditarAtividade";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/cadastro" component={CriarPerfil} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/perfil" component={VerPerfil} exact />
      <Route path="/perfil/edit" component={EditarPerfil} exact />
      <Route path="/disciplinas" component={Disciplinas} exact />
      <Route path="/atividades" component={Atividades} exact />
      <Route path="/disciplinas/view/:disciplinaID" component={VerDisciplina} />
      <Route path="/disciplinas/create" component={CriarDisciplina} exact />
      <Route path="/atividades/create" component={CriarAtividade} exact />

      <Route path="/atividades/view/:atividadeID" component={VerAtividade} />
      <Route
        path="/disciplinas/edit/:disciplinaID"
        component={EditarDisciplina}
      />
      <Route path="/atividades/edit/:atividadeID" component={EditarAtividade} />
    </BrowserRouter>
  );
};

export default Routes;
