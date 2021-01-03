import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useHistory } from "react-router-dom";
import styles from "./CriarPerfil.css";
import { FiCheckSquare, FiCornerDownLeft } from "react-icons/fi";
import { api } from "../../services/api.js";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

/**
 * @module usuarios/Cadastrar
 */

/**
 * @typedef Usuário
 * @type {object}
 * @property {String} nome - nome completo do usuário
 * @property {String} usuario - nome de usuário (utilizado para logar)
 * @property {String} curso- nome do curso
 * @property {String} senha - senha do usuário (utilizada para logar)
 * @property {String} confirmaSenha - campo para verificar senha do usuário
 *
 */

/**
 *
 * Realiza cadastro do usuário.
 *
 */

export function CriarPerfil() {
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [curso, setCurso] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const history = useHistory();
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [senhasIguais, setSenhasIguais] = useState(false);

  /**
   * Faz requisição POST para inserir usuário
   * @function submitCadastro
   */

  function submitCadastro(event) {
    event.preventDefault();
    if (confirmaSenha != senha) {
      setSenhasIguais(true);
      return;
    }
    console.log(nome, usuario, curso, senha, confirmaSenha);

    api
      .post("usuario", { nome, usuario, curso, senha })
      .then((response) => {
        console.log(response.data);
        setSucesso(true);
        window.setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((erro) => {
        setErro(true);
        console.log(erro.response.data.resposta);
        setMensagem(erro.response.data.resposta);
      });
  }

  /**
   *Ao clicar na seta para voltar, redireciona o usuário para página de Login.
   * @function toLogin
   */

  function toLogin() {
    history.push("/");
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSenhasIguais(false);
    setErro(false);
    setSucesso(false);
  };

  return (
    <div className="bloco_cadastro">
      <form onSubmit={submitCadastro}>
        <div className="box_cadastro">
          <div className="header_cadastro">
            <FiCornerDownLeft
              id="voltarLogin"
              onClick={toLogin}
              size={40}
              color="black"
            />
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
      <Snackbar
        open={sucesso}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          Usuário criado com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar
        open={erro}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="error">
          {mensagem}
        </Alert>
      </Snackbar>

      <Snackbar
        open={senhasIguais}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="warning">
          As senhas precisam ser iguais!
        </Alert>
      </Snackbar>
    </div>
  );
}
