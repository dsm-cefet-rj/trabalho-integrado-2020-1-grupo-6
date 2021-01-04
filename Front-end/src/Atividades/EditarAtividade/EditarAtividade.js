import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./EditarAtividade.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { FiCheckSquare, FiCornerDownLeft, FiFile } from "react-icons/fi";
import { api } from "../../services/api.js";
import { useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

/**
 * @module atividades/Editar
 */

/**
 * @typedef Atividade
 * @type {object}
 * @property {String} nome - nome da atividade
 * @property {String} dataEntrega - data de entrega da atividade
 * @property {String} pontuacaoMax- pontuação máxima da atividade
 * @property {String} status - status atual da atividade
 * @property {String} tipo - campo para verificar senha do usuário
 * @property {String} descricao - descrição da atividade
 * @property {String} notaFinal - nota final da atividade
 * @property {String} arquivo - arquivo da atividade
 * @property {String} idDisciplina - identificador da disciplina do usuário
 * @property {String} idUsuario - identificador do usuário
 *
 *
 */

/**
 *
 * Edita informações dos campos da atividade da disciplina do usuário.
 * Para isso, faz uma requisição GET para pegar as informações da atividade e adicionar nos inputs para melhor visualização.
 *
 *
 *
 */

export function EditarAtividade() {
  const [nome, setNome] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [pontuacaoMax, setPontuacaoMax] = useState("");
  const [status, setStatus] = useState("Aguardando");
  const [tipo, setTipo] = useState("Prova");
  const [descricao, setDescricao] = useState("");
  const [notaFinal, setNotaFinal] = useState("");
  const [arquivo, setArquivo] = useState("");
  const [idDisciplina, setIdDisciplina] = useState("");
  const { atividadeID } = useParams();
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const usuario = useSelector((state) => state.usuario);

  const history = useHistory();
  console.log(usuario);

  const token = localStorage.getItem("jwt");
  console.log(token);

  useEffect(() => {
    api
      .get("/VerAtividade/" + atividadeID, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setNome(response.data.nome);
        setDataEntrega(response.data.dataEntrega);
        setPontuacaoMax(response.data.pontuacaoMax);
        setStatus(response.data.status);
        setTipo(response.data.tipo);
        setDescricao(response.data.descricao);
        setNotaFinal(response.data.notaFinal);
        setArquivo(response.data.arquivo);
        setIdDisciplina(response.data.idDisciplina);
      });
  }, []);

  /**
   * Faz requisição PUT para editar os campos da atividade da disciplina do usuário
   * @function submitEditarAtividade
   */

  function submitEditarAtividade(event) {
    event.preventDefault();

    api
      .put(
        "/Atividade/" + atividadeID,
        {
          nome,
          dataEntrega,
          pontuacaoMax,
          status,
          tipo,
          descricao,
          notaFinal,
          arquivo,
          idDisciplina,
          idUsuario: usuario,
        },
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        setSucesso(true);
        window.setTimeout(() => {
          history.push("/atividades/view/" + atividadeID);
        }, 2000);
      })
      .catch((erro) => {
        setErro(true);
        setMensagem(erro.response.data.resposta);
      });
  }

  /**
   * Ao clicar no botão de voltar, redireciona o usuário paraa página da atividade
   * @function toVerAtividades
   */

  function toVerAtividades() {
    history.push("/atividades/view/" + atividadeID);
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
    <div className="blocoEditarAtividade">
      <form onSubmit={submitEditarAtividade}>
        <div className="boxEditarAtividade">
          <div className="headerEditarAtividade">
            <FiCornerDownLeft
              id="voltarVerAtividades"
              onClick={toVerAtividades}
              size={40}
              color="black"
            />

            <h2 className="tituloEditarAtividade">Editar Atividade</h2>
            <FiCheckSquare size={40} color="black" />
          </div>
          <input
            type="text"
            id="editarNomeAtividade"
            className="inputsEditarAtividade"
            placeholder="Digite nome da atividade"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarDataEntregaAtividade"
            className="inputsEditarAtividade"
            placeholder="Digite data de entrega da atividade"
            value={dataEntrega}
            onChange={(e) => setDataEntrega(e.target.value)}
          ></input>
          <input
            type="text"
            id="editarPontuacaoMaxAtividade"
            className="inputsEditarAtividade"
            placeholder="Digite pontuação máxima da atividade"
            value={pontuacaoMax}
            onChange={(e) => setPontuacaoMax(e.target.value)}
          ></input>

          <select
            name="status"
            className="editarStatusTipo"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Em andamento" id="editarStatusAtividadeAguardando">
              Aguardando
            </option>
            <option value="Concluida" id="editarStatusAtividadeConcluida">
              Concluída
            </option>
          </select>

          <select
            name="tipo"
            className="editarStatusTipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="Prova" id="editarTipoProvaAtividade">
              Prova
            </option>
            <option value="Trabalho" id="editarTipoTrabalhoAtividade">
              Trabalho
            </option>
          </select>

          <input
            type="text"
            id="editraDescricaoAtividade"
            className="inputsEditarAtividade"
            placeholder="Digite descrição da atividade"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></input>

          <input
            type="text"
            id="editarNotaFinalAtividade"
            className="inputsEditarAtividade"
            placeholder="Digite nota final da atividade"
            value={notaFinal}
            onChange={(e) => setNotaFinal(e.target.value)}
          ></input>

          <input
            type="text"
            id="editarArquivoAtividade"
            className="inputsEditarAtividade"
            placeholder="Insira arquivo da atividade"
            value={arquivo}
            onChange={(e) => setArquivo(e.target.value)}
          ></input>

          <button type="submit" id="btnSalvarEdicaoAtividade">
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
          Atividade editada com sucesso!
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
