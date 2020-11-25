import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./veratividade.css";
import { useHistory, useParams } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import { api } from "../../services/api.js";

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
  const history = useHistory();

  const { usuario } = useSelector((state) => {
    return {
      usuario: state.usuario,
    };
  });

  useEffect(() => {
    if (!usuario) {
      history.push("/");
      return;
    }

    api
      .get("atividades/" + atividadeID, {
        params: {
          idUsuario: usuario.id,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setNome(response.data.nome);
        setStatus(response.data.status);
        setDataEntrega(response.data.dataEntrega);
        setDescricao(response.data.descricao);
        setPontuacaoMax(response.data.pontuacaoMax);
        setNotaFinal(response.data.notaFinal);
        setArquivo(response.data.arquivo);
        api
          .get("disciplinas/" + response.data.idDisciplina)
          .then((disciplina) => {
            setDisciplina(disciplina.data);
          });
      });
  }, []);

  function toEditarAtividade() {
    history.push("/atividades/edit/" + atividadeID);
  }

  function toRemoverAtividade() {
    api.delete("atividades/" + atividadeID).then((response) => {
      history.push("/disciplinas/view/" + disciplina.id);
    });
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
    </div>
  );
}
