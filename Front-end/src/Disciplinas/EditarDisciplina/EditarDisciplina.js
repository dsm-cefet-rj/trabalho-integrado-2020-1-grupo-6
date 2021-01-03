import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FiCheckSquare, FiCornerDownLeft } from "react-icons/fi";
import styles from "./EditarDisciplina.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { api } from "../../services/api.js";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

/**
 * @module disciplinas/Editar
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
 * @property {String} idDisciplina - identificador da disciplina
 * @property {String} idUsuario - identificador do usuário da disciplina
 *
 */

/**
 *
 * Edita informações dos campos da disciplina do usuário.
 * Para isso, faz uma requisição GET para pegar as informações da disciplina e adicionar nos inputs para melhor visualização.
 *
 *
 *
 */

export function EditarDisciplina() {
  const [nome, setNome] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [horario, setHorario] = useState("");
  const [local, setLocal] = useState("");
  const [nomeProfessor, setNomeProfessor] = useState("");
  const [material, setMaterial] = useState("");
  const [status, setStatus] = useState("Em andamento");
  const { disciplinaID } = useParams();
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const usuario =
    useSelector((state) => state.usuario) ||
    JSON.parse(localStorage.getItem("USUARIO"));

  const history = useHistory();

  useEffect(() => {
    api
      .get("VerDisciplinas/" + disciplinaID, {
        params: {
          idUsuario: usuario,
          Disciplina: disciplinaID,
        },
      })
      .then((response) => {
        setNome(response.data.nome);
        setPeriodo(response.data.periodo);
        setHorario(response.data.horario);
        setLocal(response.data.local);
        setNomeProfessor(response.data.professor);
        setMaterial(response.data.material);
        setStatus(response.data.status);
      });
  }, []);

  /**
   * Faz requisição PUT para editar os campos da disciplina do usuário
   * @function submitEditarDisciplina
   */

  function submitEditarDisciplina(event) {
    event.preventDefault();

    api
      .put("/Disciplinas/" + disciplinaID, {
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
          history.push("/disciplinas/view/" + disciplinaID);
        }, 2000);
      })
      .catch((erro) => {
        setErro(true);
        setMensagem(erro.response.data.resposta);
      });
  }

  /**
   * Ao clicar no botão de voltar, redireciona o usuário para a página da disciplina
   * @function toVerDisciplinas
   */

  function toVerDisciplinas() {
    history.push("/disciplinas/view/" + disciplinaID);
    window.location.reload();
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
    <div className="bloco_editardisciplina">
      <form onSubmit={submitEditarDisciplina}>
        <div className="box_editardisciplina">
          <div className="header_editardisciplina">
            <FiCornerDownLeft
              id="voltarVerDisciplinas"
              onClick={toVerDisciplinas}
              size={40}
              color="black"
            />

            <h2 className="titulo_editardisciplina">Editar Disciplina</h2>
            <FiCheckSquare size={40} color="black" />
          </div>

          <input
            type="text"
            id="editarNomeDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite nome da disciplina"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarPeriodoDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite período da disciplina"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarHorarioDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite horário das aulas"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarLocalDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite local das aulas"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarNomeProfessorDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite nome do professor responsável"
            value={nomeProfessor}
            onChange={(e) => setNomeProfessor(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarMaterialDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite link para material da disciplina"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          ></input>

          <select
            name="status"
            id="editarStatus"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Em andamento" id="editarStatusDisciplinaEmAndamento">
              Em andamento
            </option>
            <option value="Concluida" id="editarStatusDisciplinaConcluida">
              Concluída
            </option>
          </select>

          <button type="submit" id="btnSalvaredicaoDisciplina">
            Salvar
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
          Disciplina editada com sucesso!
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
