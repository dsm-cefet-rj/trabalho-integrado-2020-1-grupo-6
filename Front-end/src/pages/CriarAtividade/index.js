import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./CriarAtividade.css";
import { Link, useHistory } from "react-router-dom";
import { FiCheckSquare, FiFile } from "react-icons/fi";
import { api } from "../../services/api.js";
import { useSelector } from "react-redux";

export function CriarAtividade() {
  const [nome, setNome] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [pontuacaoMax, setPontuacaoMax] = useState("");
  const [status, setStatus] = useState("Aguardando");
  const [tipo, setTipo] = useState("Prova");
  const [descricao, setDescricao] = useState("");
  const [notaFinal, setNotaFinal] = useState("");
  const [arquivo, setArquivo] = useState("");

  const history = useHistory();

  const usuario = useSelector((state) => state?.usuario);
  useEffect(() => {
    console.log(usuario);
    if (!usuario) {
      history.push("/");
    }
  }, []);

  function submitCriarAtividade(event) {
    event.preventDefault();

    console.log(
      nome,
      dataEntrega,
      pontuacaoMax,
      status,
      tipo,
      descricao,
      notaFinal,
      arquivo
    );

    api
      .post("atividades", {
        nome,
        dataEntrega,
        pontuacaoMax,
        status,
        tipo,
        descricao,
        notaFinal,
        arquivo,
      })
      .then((response) => {
        console.log(response.data);
        history.push("/atividades"); //falta redux
      });
  }

  return (
    <div className="blocoCriarAtividade">
      <form onSubmit={submitCriarAtividade}>
        <div className="boxCriarAtividade">
          <div className="headerCriarAtividade">
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
    </div>
  );
}
