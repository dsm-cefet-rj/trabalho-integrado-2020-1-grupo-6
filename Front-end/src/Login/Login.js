import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styles from "./Login.css";
import { FiCheckSquare } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { api } from "../services/api.js";
import { useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * FAz requisição GET para pegar id do usuário.
   * @function submitLogin
   * @throws Lança tratamento de erro se usuário inserir login ou senha incorretos
   */

  function submitLogin(event) {
    event.preventDefault();

    api.post("usuario/login", { usuario: login, senha }).then((response) => {
      if (response.data == 1) {
        setSnackbarOpen(true);
        return;
      }
      console.log(response);
      // console.log(response.headers.authorization);
      dispatch({
        type: "fazerLogin",
        payload: response.data.usuario,
      });

      localStorage.setItem("jwt", response.headers.authorization);
      setOpen(true);
      window.setTimeout(() => {
        history.push("/home");
      }, 2000);
    });
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setSnackbarOpen(false);
  };

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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="error">
          Usuário e/ou senha incorretos!
        </Alert>
      </Snackbar>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          Usuário logado com sucesso!
        </Alert>
      </Snackbar>
    </div>
  );
}
