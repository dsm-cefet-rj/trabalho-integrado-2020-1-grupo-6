import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./EditarAtividade.css";
import { Link, useHistory } from "react-router-dom";
import { FiCheckSquare, FiFile } from "react-icons/fi";

export function EditarAtividade() {
  const [nome, setNome] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [pontuacaoMax, setPontuacaoMax] = useState("");
  const [status, setStatus] = useState("Aguardando");
  const [tipo, setTipo] = useState("Prova");
  const [descricao, setDescricao] = useState("");
  const [notaFinal, setNotaFinal] = useState("");
  const [arquivo, setArquivo] = useState("");

  const history = useHistory();

  function submitEditarAtividade(event) {
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
    history.push("/atividades/view/:atividadeID");
  }

  return (
    <div className="blocoEditarAtividade">
      <form onSubmit={submitEditarAtividade}>
        <div className="boxEditarAtividade">
          <div className="headerEditarAtividade">
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
            Criar
          </button>
        </div>
      </form>
    </div>
  );
}
