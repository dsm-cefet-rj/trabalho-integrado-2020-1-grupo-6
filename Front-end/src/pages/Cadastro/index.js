import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styles from "./cadastro.css";
import { FiCheckSquare } from "react-icons/fi";

export function Cadastro() {
  return (
    <div className="bloco_cadastro">
      <div className="box_cadastro">
        <div className="header_cadastro">
          <h2 className="titulo_cadastro">Faça seu cadastro</h2>
          <FiCheckSquare size={40} color="#0629a9" />
        </div>
        <input
          type="text"
          id="nomeCompleto"
          className="inputs_cadastro"
          placeholder="Digite seu nome completo"
        ></input>
        <input
          type="text"
          id="nomeUsuario"
          className="inputs_cadastro"
          placeholder="Digite seu usuário"
        ></input>
        <input
          type="text"
          id="nomeCurso"
          className="inputs_cadastro"
          placeholder="Digite seu curso"
        ></input>
        <input
          type="text"
          id="senhaUsuario"
          className="inputs_cadastro"
          placeholder="Digite sua nova senha"
        ></input>
        <input
          type="text"
          id="confirmaSenhaUsuario"
          className="inputs_cadastro"
          placeholder="Confirme sua nova senha"
        ></input>
        <button type="submit" id="btnCriarConta">
          Criar Conta
        </button>
      </div>
    </div>
  );
}
