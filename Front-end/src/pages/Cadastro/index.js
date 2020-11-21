import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useHistory } from "react-router-dom";
import styles from "./cadastro.css";
import { FiCheckSquare } from "react-icons/fi";

export function Cadastro() {
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [curso, setCurso] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const history = useHistory();

  function submitCadastro(event) {
    event.preventDefault();
    if (confirmaSenha != senha) {
      alert("As senhas precisam ser iguais");
      return;
    }
    console.log(nome, usuario, curso, senha, confirmaSenha);
    history.push("/");
  }

  return (
    <div className="bloco_cadastro">
      <form onSubmit={submitCadastro}>
        <div className="box_cadastro">
          <div className="header_cadastro">
            <h2 className="titulo_cadastro">Faça seu cadastro</h2>
            <FiCheckSquare size={40} color="black" />
          </div>
          <input
            type="text"
            id="nomeCompleto"
            className="inputs_cadastro"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <input
            type="text"
            id="nomeUsuario"
            className="inputs_cadastro"
            placeholder="Digite seu usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          ></input>
          <input
            type="text"
            id="nomeCurso"
            className="inputs_cadastro"
            placeholder="Digite seu curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          ></input>
          <input
            type="password"
            id="senhaUsuario"
            className="inputs_cadastro"
            placeholder="Digite sua nova senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          ></input>
          <input
            type="password"
            id="confirmaSenhaUsuario"
            className="inputs_cadastro"
            placeholder="Confirme sua nova senha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          ></input>
          <button type="submit" id="btnCriarConta">
            Criar Conta
          </button>
        </div>
      </form>
    </div>
  );
}
