import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./VerAtividade.css";
import { useHistory, useParams } from "react-router-dom";
import { FiEdit, FiTrash2, FiCornerDownLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import { api } from "../../services/api.js";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

/**
 * @module atividades/Visualizar
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
 * Mostra atividade da disciplina do usuário
 * Para isso, faz duas requisições GET:
 * 1) Para pegar a disciplina do usuário
 * 2) Para pegar a atividade dessa disciplina
 *
 *
 *
 *
 */

export function VerAtividade() {
  const { atividadeID } = useParams();
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [descricao, setDescricao] = useState("");
  const [pontuacaoMax, setPontuacaoMax] = useState("");
  const [notaFinal, setNotaFinal] = useState("");
  const [arquivo, setArquivo] = useState("");
  const [disciplina, setDisciplina] = useState({});
  const [sucesso, setSucesso] = useState(false);
  const history = useHistory();

  const { usuario } = useSelector((state) => {
    return {
      usuario: JSON.parse(localStorage.getItem("USUARIO")),
    };
  });

  useEffect(() => {
    // if (!usuario) {
    //   history.push("/");
    //   return;
    // }

    api
      .get("/VerAtividade/" + atividadeID, {
        params: {
          idUsuario: usuario,
        },
      })
      .then((response) => {
        setNome(response.data.nome);
        setStatus(response.data.status);
        setDataEntrega(response.data.dataEntrega);
        setDescricao(response.data.descricao);
        setPontuacaoMax(response.data.pontuacaoMax);
        setNotaFinal(response.data.notaFinal);
        setArquivo(response.data.arquivo);
        console.log(usuario);
        api
          .get("VerDisciplinas/" + response.data.idDisciplina, {
            params: {
              idUsuario: usuario,
              Disciplina: response.data.idDisciplina,
            },
          })
          .then((disciplina) => {
            setDisciplina(disciplina.data);
          });
      });
  }, []);

  /**
   * Ao clicar no botão de editar, usuário é redirecionado para página de editar atividade
   * @function toEditarAtividade
   */

  function toEditarAtividade() {
    history.push("/atividades/edit/" + atividadeID);
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
   * Ao clicar no botão de excluir, atividade é excluída e usuário é redirecionado para página de listagem das disciplinas
   * @function toRemoverAtividade
   */

  function toRemoverAtividade() {
    api.delete("/Atividade/" + atividadeID).then((response) => {
      setSucesso(true);
      window.setTimeout(() => {
        history.push("/disciplinas/view/" + disciplina.id);
      }, 4000);
    });
  }

  /**
   *Ao clicar na seta para voltar, redireciona o usuário para página de listagem das disciplinas.
   * @function toVerAtividades
   */

  function toVerAtividades() {
    history.push("/disciplinas");
    window.location.reload();
  }

  return (
    <div className="blocoVerAtividade">
      <div className="boxVerAtividade">
        <div className="header">
          <div className="headerVerAtividade">
            <h1 id="tituloVerAtividade">{nome}</h1>
            <h2>{disciplina.nome}</h2>
          </div>
          <div className="icons">
            <FiCornerDownLeft
              id="voltarVerAtividades"
              onClick={toVerAtividades}
              size={40}
              color="black"
            />

            <FiEdit
              size={40}
              id="editarAtividade"
              color="black"
              onClick={toEditarAtividade}
            />
            <FiTrash2
              size={40}
              id="excluirAtividade"
              color="black"
              onClick={toRemoverAtividade}
            />
          </div>
        </div>

        <div className="opVerAtividade">
          <div id="statusVerAtividade">{status}</div>

          <div className="itemsVerAtividade">
            Data de entrega: {dataEntrega}
          </div>
          <div className="itemsVerAtividade">Descrição: {descricao}</div>
          <div className="itemsVerAtividade">
            Pontuação Máxima: {pontuacaoMax}
          </div>
          <div className="itemsVerAtividade">Nota Final: {notaFinal}</div>
          <div className="itemsVerAtividade">Arquivo: {arquivo}</div>
        </div>
      </div>

      <Snackbar
        open={sucesso}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          Atividade removida com sucesso!
        </Alert>
      </Snackbar>
    </div>
  );
}
