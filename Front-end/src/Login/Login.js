import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styles from "./Login.css";
import { FiCheckSquare } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { api } from "../services/api.js";
import { useDispatch } from "react-redux";
/**
 * @module usuarios/Login
 */

/**
 * @typedef Usuário
 * @type {object}
 * @property {String} usuario - nome de usuário (utilizado para logar)
 * @property {String} senha - senha do usuário (utilizada para logar)
 * @property {String} idUsuario - identificador do usuário
 *
 */

/**
 *
 * Permite que usuário entre com usuário e senha na aplicação.
 *
 *
 */

export function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * FAz requisição GET para pegar id do usuário.
   * @function submitLogin
   * @throws Lança tratamento de erro se usuário inserir login ou senha incorretos
   */

  function submitLogin(event) {
    event.preventDefault();



    api
      .get("usuario/login", {
        params: { usuario: login, senha },
      })
      .then((response) => {
        if (response.data == 1) {
          alert("Usuário e/ou senha estão incorretos");
          return;
        }
        console.log(response.data);
        dispatch({
          type: "fazerLogin",
          payload: response.data.usuario,
        });
        history.push("/home");
      });
  }

  return (
    <div className="bloco_login">
      <div className="box_login">
        <div className="header_login">
          <h1 id="nome_app">TaskBoard</h1>
          <FiCheckSquare size={45} color="black" />
        </div>
        <form onSubmit={submitLogin}>
          <div className="op_login">
            <h2 className="titulo_login">Faça seu login</h2>

            <input
              id="usuarioLogin"
              className="inputs_login"
              placeholder="Digite seu usuário"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            ></input>

            <input
              type="password"
              id="usuarioSenha"
              className="inputs_login"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            ></input>

            <button type="submit" id="btnEntrar">
              Entrar
            </button>
          </div>
        </form>

        <Link to="/cadastro" id="btnCadastrar">
          Cadastre-se aqui
        </Link>
      </div>
    </div>
  );
}
