import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import styles from "./disciplinas.css";
import { Link, useHistory } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { api } from "../../services/api";
import { useSelector } from "react-redux";

export function Disciplinas() {
  const usuario = useSelector((state) => state?.usuario);
  const [Disciplina, setDisciplina] = useState("");
  const history = useHistory();
  // console.log(usuario);

  useEffect(() => {
    // console.log(usuario);
    if (!usuario) {
      history.push("/");
    }
    api
      .get("disciplinas", {
        params: {
          // idUsuario: usuario.id,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  function submitDisciplinas() {
    // console.log(Disciplina);

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
            value={Disciplina}
            onChange={(e) => setDisciplina(e.target.value)}
          ></input>

          <select name="Status" id="filtroDisciplina">
            <option value=""></option>
            <option value="Em andamento">Em Andamento</option>
            <option value="Concluida">Concluida</option>
          </select>
          <button id="btnBuscaDisciplina">Buscar</button>

          <table
            id="tabelaDisciplinas"
            className="table table-striped"
            border="1"
          >
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Período</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Link
                    id="nomeDisciplinaTabela"
                    to="/disciplina/view/:disciplinaID"
                  >
                    PSW
                  </Link>
                </td>
                <td>4° período</td>
                <td>Concluída</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
