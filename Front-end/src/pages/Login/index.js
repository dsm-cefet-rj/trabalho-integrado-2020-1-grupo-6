import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styles from "./login.css";
import { FiCheckSquare } from "react-icons/fi";

export function Login() {
  return (
    <div className="container">
      <div className="box">
        <div className="header">
          <h1>TaskBoard</h1>
          <FiCheckSquare size={35} color="purple" />
        </div>
        <h2>Faça seu login</h2>
        <div>
          <label>Usuário:</label>
          <input id="usuarioLogin" placeholder="Digite seu usuário"></input>
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="text"
            id="usuarioSenha"
            placeholder="Digite sua senha"
          ></input>
        </div>
        <input type="button" id="btnEntrar" value="Entrar"></input>

        <Link to="/cadastro" id="btnCadastrar">
          Cadastre-se aqui
        </Link>
      </div>
    </div>
  );
}
