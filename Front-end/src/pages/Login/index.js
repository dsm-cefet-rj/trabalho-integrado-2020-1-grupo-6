import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styles from "./login.css";
import { FiCheckSquare } from "react-icons/fi";

export function Login() {
  return (
    <div className="bloco_login">
      <div className="box_login">
        <div className="header_login">
          <h1 id="nome_app">TaskBoard</h1>
          <FiCheckSquare size={45} color="#0629a9" />
        </div>
        <div className="box">
          <h2 className="titulo_login">Faça seu login</h2>

          <input
            id="usuarioLogin"
            className="inputs_login"
            placeholder="Digite seu usuário"
          ></input>
          <input
            type="text"
            id="usuarioSenha"
            className="inputs_login"
            placeholder="Digite sua senha"
          ></input>

          <button type="submit" id="btnEntrar">
            Entrar
          </button>
        </div>

        <Link to="/cadastro" id="btnCadastrar">
          Cadastre-se aqui
        </Link>
      </div>
    </div>
  );
}
