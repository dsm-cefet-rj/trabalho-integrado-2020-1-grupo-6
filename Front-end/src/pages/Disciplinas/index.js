import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import styles from "./disciplinas.css";
import { Link, useHistory } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { api } from "../../services/api";
import { useSelector } from "react-redux";

export function Disciplinas() {
  const usuario = useSelector((state) => state?.usuario);
  const [disciplinas, setDisciplinas] = useState("");
  const history = useHistory();
  // console.log(usuario);

  useEffect(() => {
    if (!usuario) {
      history.push("/");
      return;
    }

    api
      .get("disciplinas", {
        params: {
          idUsuario: usuario.id,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setDisciplinas(response.data);
      });
  }, []);

  console.log(disciplinas);

  function submitDisciplinas() {
    history.push("/home");
  }

  function toCriarDisciplina() {
    history.push("/disciplinas/create");
  }

  function toVerDisciplina() {
    history.push("/disciplina/view/:disciplinaID");
  }

  return (
    <div className="blocoDisciplinas">
      <form onSubmit={submitDisciplinas}>
        <div className="boxDisciplinas">
          <div className="headerDisciplinas">
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
          ></input>

          <select name="Status" id="filtroDisciplina">
            <option value=""></option>
            <option value="Em andamento">Em Andamento</option>
            <option value="Concluida">Concluida</option>
          </select>
          <button id="btnBuscaDisciplina">Buscar</button>

          <table id="tabelaDisciplinas" border="1">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Período</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {disciplinas &&
                disciplinas.map((disciplina) => (
                  <tr>
                    <td>
                      <Link
                        id="nomeDisciplinaTabela"
                        to={"/disciplina/view/" + disciplina.id}
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
        </div>
      </form>
    </div>
  );
}
