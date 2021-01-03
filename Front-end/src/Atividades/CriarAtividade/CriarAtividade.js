import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./CriarAtividade.css";
import { Link, useHistory } from "react-router-dom";
import { FiCheckSquare, FiFile, FiCornerDownLeft } from "react-icons/fi";
import { api } from "../../services/api.js";
import { useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

/**
 * @module atividades/Cadastrar
 */

/**
 * @typedef Usuário
 * @type {object}
 * @property {String} nome - nome da atividade
 * @property {String} dataEntrega - data de entrega da atividade
 * @property {String} pontuacaoMax- pontuação máxima da atividade
 * @property {String} status - status atual da atividade
 * @property {String} tipo - campo para verificar senha do usuário
 * @property {String} descricao - descrição da atividade
 * @property {String} notaFinal - nota final da atividade
 * @property {String} arquivo - arquivo da atividade
 * @property {String} idUsuario - identificador do usuário
 * @property {String} idDisciplina - identificador da disciplina
 *
 *
 */

/**
 *
 * Realiza cadastro da atividade em determinada disciplina do usuário
 *
 */
export function CriarAtividade() {
  const [nome, setNome] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [pontuacaoMax, setPontuacaoMax] = useState("");
  const [status, setStatus] = useState("Aguardando");
  const [tipo, setTipo] = useState("Prova");
  const [descricao, setDescricao] = useState("");
  const [notaFinal, setNotaFinal] = useState("");
  const [arquivo, setArquivo] = useState("");
  const [disciplinas, setDisciplinas] = useState("");
  const [nomeIgual, setNomeIgual] = useState(false);
  const [nomeDiferente, setNomeDiferente] = useState(false);

  const history = useHistory();

  const { usuario, disciplina } = useSelector((state) => ({
    usuario: JSON.parse(localStorage.getItem("USUARIO")),
    disciplina: state?.disciplina,
  }));

  useEffect(() => {
    console.log(usuario);
    console.log(disciplina);
  }, []);

  /**
   * Faz requisição POST para inserir atividade da disciplina do usuário
   * @function submitCriarAtividade
   * @throws Lança erro se coloca atividade com mesmo nome para a mesma disciplina
   */
  function submitCriarAtividade(event) {
    event.preventDefault();

    api
      .post("/criarAtividade", {
        nome,
        dataEntrega,
        pontuacaoMax,
        status,
        tipo,
        descricao,
        notaFinal,
        arquivo,
        idDisciplina: disciplina,
        idUsuario: usuario,
      })
      .then((response) => {
        console.log(response.data);
        setNomeDiferente(true);
        window.setTimeout(() => {
          history.push("/disciplinas/view/" + disciplina);
        }, 4000);
      })
      .catch((erro) => {
        console.log(erro.response.data);
        setNomeIgual(true);
      });
  }

  /**
   *Ao clicar na seta para voltar, redireciona o usuário para página da disciplina.
   * @function toVerDisciplinas
   */

  function toVerDisciplinas() {
    history.push("/disciplinas/view/" + disciplina);
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNomeDiferente(false);
    setNomeIgual(false);
  };

  return (
    <div className="blocoCriarAtividade">
      <form onSubmit={submitCriarAtividade}>
        <div className="boxCriarAtividade">
          <div className="headerCriarAtividade">
            <FiCornerDownLeft
              id="voltarVerDisciplinas"
              onClick={toVerDisciplinas}
              size={40}
              color="black"
            />

            <h2 className="tituloCriarAtividade"> Criar Atividade</h2>
            <FiCheckSquare size={40} color="black" />
          </div>
          <input
            type="text"
            id="nomeAtividade"
            className="inputsCriarAtividade"
            placeholder="Digite nome da atividade"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <input
            type="text"
            id="dataEntregaAtividade"
            className="inputsCriarAtividade"
            placeholder="Digite data de entrega da atividade"
            value={dataEntrega}
            onChange={(e) => setDataEntrega(e.target.value)}
          ></input>
          <input
            type="text"
            id="pontuacaoMaxAtividade"
            className="inputsCriarAtividade"
            placeholder="Digite pontuação máxima da atividade"
            value={pontuacaoMax}
            onChange={(e) => setPontuacaoMax(e.target.value)}
          ></input>

          <select
            name="status"
            className="status_tipo"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Em andamento" id="statusAtividadeAguardando">
              Aguardando
            </option>
            <option value="Concluida" id="statusAtividadeConcluida">
              Concluída
            </option>
          </select>

          <select
            name="tipo"
            className="status_tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="Prova" id="tipoProvaAtividade">
              Prova
            </option>
            <option value="Trabalho" id="tipoTrabalhoAtividade">
              Trabalho
            </option>
          </select>

          <input
            type="text"
            id="descricaoAtividade"
            className="inputsCriarAtividade"
            placeholder="Digite descrição da atividade"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></input>

          <input
            type="text"
            id="notaFinalAtividade"
            className="inputsCriarAtividade"
            placeholder="Digite nota final da atividade"
            value={notaFinal}
            onChange={(e) => setNotaFinal(e.target.value)}
          ></input>

          <input
            type="text"
            id="arquivoAtividade"
            className="inputsCriarAtividade"
            placeholder="Insira arquivo da atividade"
            value={arquivo}
            onChange={(e) => setArquivo(e.target.value)}
          ></input>

          <button type="submit" id="btnCriarAtividade">
            Criar
          </button>
        </div>
      </form>

      <Snackbar
        open={nomeIgual}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="error">
          Atividade com mesmo nome já existe!
        </Alert>
      </Snackbar>

      <Snackbar
        open={nomeDiferente}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          Atividade criada com sucesso!
        </Alert>
      </Snackbar>
    </div>
  );
}
