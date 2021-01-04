import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import {
  FiPlusCircle,
  FiCornerDownLeft,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";
import styles from "./VerDisciplina.css";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../../services/api.js";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

/**
 * @module disciplinas/Visualizar
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
 * @property {String} idUsuario - identificador do usuário
 *
 *
 */

/**
 *
 * Mostra disciplina do usuário.
 * Para isso, faz duas requisições GET:
 * 1) Para pegar a disciplina do usuário
 * 2) Para pegar as atividades dessa disciplina
 *
 */

export function VerDisciplina() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [horario, setHorario] = useState("");
  const [local, setLocal] = useState("");
  const [nomeProfessor, setNomeProfessor] = useState("");
  const [material, setMaterial] = useState("");
  const [status, setStatus] = useState("Em andamento");
  const [atividades, setAtividades] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const { disciplinaID } = useParams();

  const usuario =
    useSelector((state) => state?.usuario) ||
    JSON.parse(localStorage.getItem("USUARIO"));

  const token = localStorage.getItem("jwt");
  console.log(token);

  useEffect(() => {
    // if (!usuario) {
    //   history.push("/");
    //   return;
    // }

    api
      .get("/VerDisciplinas/" + disciplinaID, {
        params: {
          idUsuario: usuario,
          Disciplina: disciplinaID,
        },
        headers: { Authorization: "Bearer " + token },
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

    api
      .get("/Atividades/", {
        params: {
          idUsuario: usuario,
          idDisciplina: disciplinaID,
        },
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setAtividades(response.data);
      });
  }, []);

  /**
   * Ao clicar no botão de "Mais", usuário é redirecionado para página de criar atividade
   * @function toCriarAtividade
   */

  function toCriarAtividade() {
    dispatch({
      type: "criarAtividade",
      payload: disciplinaID,
    });
    history.push("/atividades/create");
  }

  /**
   * Ao clicar no botão de editar, usuário é redirecionado para página de editar disciplina
   * @function toEditarDisciplina
   */

  function toEditarDisciplina() {
    history.push("/disciplinas/edit/" + disciplinaID);
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSucesso(false);
  };

  /**
   * Ao clicar no botão de excluir, disciplina é excluída e usuário é redirecionado para página de listagem das disciplinas
   * @function toRemoverAtividade
   */

  function toRemoveDisciplina() {
    api
      .delete("disciplinas/" + disciplinaID, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setSucesso(true);
        window.setTimeout(() => {
          history.push("/disciplinas");
        }, 2000);
      });
  }

  /**
   *Ao clicar na seta para voltar, redireciona o usuário para página de listagem das disciplinas.
   * @function toDisciplinas
   */

  function toDisciplinas() {
    history.push("/disciplinas");
  }

  /**
   * Ao clicar no botão de busca, faz uma requisição GET para realização da filtragem por status da atividade
   * @function requisicaoFiltros
   */

  function requisicaoFiltros() {
    api
      .get("/Atividades/", {
        params: {
          ...(filtroStatus && { status: filtroStatus }),
          idUsuario: usuario,
          idDisciplina: disciplinaID,
        },
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log(response.data);
        setAtividades(response.data);
      });
  }

  return (
    <div className="blocoVerDisciplina">
      <div className="boxVerDisciplina">
        <div className="headerVerDisciplina">
          <FiCornerDownLeft
            id="voltarVerDisciplinas"
            onClick={toDisciplinas}
            size={40}
            color="black"
          />

          <h1 id="tituloVerDisciplina">{nome}</h1>
          <div className="icones">
            <FiEdit
              size={30}
              id="editarDisciplina"
              onClick={toEditarDisciplina}
              color="black"
            />
            <FiTrash2
              size={30}
              id="excluirDisciplina"
              onClick={toRemoveDisciplina}
              color="black"
            />
          </div>
        </div>
        <div className="opVerDisciplina">
          <div id="statusVerDisciplina">{status}</div>

          <div className="itemsVerDisciplina">Período: {periodo}</div>
          <div className="itemsVerDisciplina">Horário: {horario}</div>
          <div className="itemsVerDisciplina">Local: {local}</div>
          <div className="itemsVerDisciplina">Professor: {nomeProfessor}</div>
          <div className="itemsVerDisciplina">
            Material: <Link to={material}>{material}</Link>
          </div>
        </div>

        <div className="headerAtividadesDisciplina">
          <h1 id="tituloAtividadeDisciplina">Atividades</h1>
          <FiPlusCircle
            id="adicionarAtividade"
            onClick={toCriarAtividade}
            size={40}
            color="black"
          />
        </div>

        <div className="filtroAtividade">
          <select
            name="Status"
            id="filtroAtividadeDisciplina"
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
          >
            <option value=""></option>
            <option value="Aguardando">Aguardando</option>
            <option value="Concluida">Concluida</option>
          </select>
          <button id="btnBuscaAtividade" onClick={requisicaoFiltros}>
            Buscar
          </button>
        </div>
      </div>
      {atividades.length > 0 ? (
        <table id="tabelaAtividadesDisciplina">
          <thead>
            <tr>
              <td>Atividade</td>
              <td>Data de Entrega</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {atividades.map((atividade) => (
              <tr key={atividade.id}>
                <td>
                  <Link
                    id="nomeAtividadeDisciplinaTabela"
                    to={"/atividades/view/" + atividade.id}
                  >
                    {atividade.nome}
                  </Link>
                </td>
                <td>{atividade.dataEntrega}</td>
                <td>{atividade.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}

      <Snackbar
        open={sucesso}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          Disciplina removida com sucesso!
        </Alert>
      </Snackbar>
    </div>
  );
}
