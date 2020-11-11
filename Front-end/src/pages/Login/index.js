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
          <FiCheckSquare size={37} color="mediumblue" />
        </div>
        <div className="corpo">
          <h2>Faça seu login</h2>

          <input
            id="usuarioLogin"
            className="inputs"
            placeholder="Digite seu usuário"
          ></input>
          <input
            type="text"
            id="usuarioSenha"
            className="inputs"
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
