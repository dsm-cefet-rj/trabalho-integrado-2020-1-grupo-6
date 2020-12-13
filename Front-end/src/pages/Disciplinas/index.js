import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import styles from "./disciplinas.css";
import { Link, useHistory } from "react-router-dom";
import { FiPlusCircle, FiCornerDownLeft } from "react-icons/fi";
import { api } from "../../services/api";
import { useSelector } from "react-redux";

export function Disciplinas() {
  const usuario =
    useSelector((state) => state?.usuario) ||
    JSON.parse(localStorage.getItem("USUARIO"));
  const [disciplinas, setDisciplinas] = useState([]);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");
  const history = useHistory();

  useEffect(() => {
    // if (!usuario) {
    //   history.push("/");
    //   return;
    // }

    api
      .get("disciplinas", {
        params: {
          idUsuario: usuario.id,
        },
      })
      .then((response) => {
        setDisciplinas(response.data);
      });
  }, []);

  function toCriarDisciplina() {
    history.push("/disciplinas/create");
  }

  function toHome(){
    history.push("home");

  }

  function requisicaoFiltros() {
    api
      .get("disciplinas", {
        params: {
          ...(filtroStatus && { status: filtroStatus }),
          ...(filtroNome && { nome_like: filtroNome }),
          idUsuario: usuario.id,
        },
      })
      .then((response) => {
        setDisciplinas(response.data);
      });
  }

  return (
    <div className="blocoDisciplinas">
      <div className="boxDisciplinas">
     
        <div className="headerDisciplinas">
      
        <FiCornerDownLeft
           id="voltarHome"
           onClick={toHome}
           size={40}
           color="black"
           />
          <h2 className="tituloDisciplinas">Disciplinas</h2>
         
          <FiPlusCircle
            id="adicionarDisciplina"
            onClick={toCriarDisciplina}
            size={40}
            color="black"
          />
         
        </div>

        <input
          id="pesquisaDisciplina"
          className="inputsDisciplinas"
          placeholder="Disciplina"
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
        ></input>

        <select
          name="Status"
          id="filtroDisciplina"
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
        >
          <option value=""></option>
          <option value="Em andamento">Em Andamento</option>
          <option value="Concluida">Concluida</option>
        </select>
        <button id="btnBuscaDisciplina" onClick={requisicaoFiltros}>
          Buscar
        </button>

        {disciplinas.length > 0 ? (
          <table id="tabelaDisciplinas">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Período</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {disciplinas.map((disciplina) => (
                <tr key={disciplina.id}>
                  <td>
                    <Link
                      id="nomeDisciplinaTabela"
                      to={"/disciplinas/view/" + disciplina.id}
                    >
                      {disciplina.nome}
                    </Link>
                  </td>
                  <td>{disciplina.periodo}</td>
                  <td>{disciplina.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
