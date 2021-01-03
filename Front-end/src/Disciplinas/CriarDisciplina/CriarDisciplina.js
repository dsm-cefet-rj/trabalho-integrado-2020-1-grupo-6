import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./CriarDisciplina.css";
import { Link, useHistory } from "react-router-dom";
import { FiCheckSquare, FiCornerDownLeft } from "react-icons/fi";
import { api } from "../../services/api.js";
import { useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

/**
 * @module disciplinas/Cadastrar
 */

/**
 * @typedef Disciplina
 * @type {object}
 * @property {String} nome - nome da disciplina
 * @property {String} periodo - período cursado na disciplina
 * @property {String} horario- horário da aula
 * @property {String} local - local da aula
 * @property {String} nomeProfessor - nome do professor que ministra a disciplina
 * @property {String} material - link de material da disciplina
 * @property {String} status - status da disciplina
 * @property {String} idUsuario - identificador do usuário
 *
 *
 */

/**
 *
 * Realiza cadastro da disciplina no usuário
 *
 */

export function CriarDisciplina() {
  const [nome, setNome] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [horario, setHorario] = useState("");
  const [local, setLocal] = useState("");
  const [nomeProfessor, setNomeProfessor] = useState("");
  const [material, setMaterial] = useState("");
  const [status, setStatus] = useState("Em andamento");
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const history = useHistory();

  const usuario =
    useSelector((state) => state?.usuario) ||
    JSON.parse(localStorage.getItem("USUARIO"));
  useEffect(() => {
    // if (!usuario) {
    //   history.push("/");
    // }
  }, []);

  /**
   * Faz requisição POST para inserir disciplina no perfil do usuário
   *
   * @function submitCriarDisciplina
   */

  function submitCriarDisciplina(event) {
    event.preventDefault();
    console.log(usuario);
    api
      .post("/disciplinas", {
        nome,
        periodo,
        horario,
        local,
        professor: nomeProfessor,
        material,
        status,
        idUsuario: usuario,
      })
      .then((response) => {
        setSucesso(true);
        window.setTimeout(() => {
          history.push("/disciplinas");
        }, 2000);
      })
      .catch((erro) => {
        setErro(true);
        console.log(erro.response.data.resposta);
        setMensagem(erro.response.data.resposta);
      });
  }

  /**
   * Ao clicar na seta para voltar, redireciona o usuário para página de listagem das disciplinas
   *
   * @function toDisciplinas
   */
  function toDisciplinas() {
    history.push("/disciplinas");
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSucesso(false);
    setErro(false);
  };

  return (
    <div className="blocoCriarDisciplina">
      <form onSubmit={submitCriarDisciplina}>
        <div className="boxCriarDisciplina">
          <div className="headerCriarDisciplina">
            <FiCornerDownLeft
              id="voltarHome"
              onClick={toDisciplinas}
              size={40}
              color="black"
            />

            <h2 className="tituloCriarDisciplina">Criar Disciplina</h2>
            <FiCheckSquare size={40} color="black" />
          </div>
          <input
            type="text"
            id="nomeDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Digite nome da disciplina"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <input
            type="text"
            id="periodoDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Digite período da disciplina"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          ></input>
          <input
            type="text"
            id="horarioDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Digite horário da aula"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          ></input>
          <input
            type="text"
            id="localDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Digite local da aula"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          ></input>
          <input
            type="text"
            id="nomeProfessorDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Digite nome do professor responsável"
            value={nomeProfessor}
            onChange={(e) => setNomeProfessor(e.target.value)}
          ></input>
          <input
            type="text"
            id="materialDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Insira link para acessar material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          ></input>
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Em andamento" id="statusDisciplinaEmAndamento">
              Em andamento
            </option>
            <option value="Concluida" id="statusDisciplinaConcluida">
              Concluída
            </option>
          </select>

          <button type="submit" id="btnCriarDisciplina">
            Criar
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
          Disciplina criada com sucesso!
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
    </div>
  );
}
