import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./CriarDisciplina.css";
import { Link, useHistory } from "react-router-dom";
import { FiCheckSquare } from "react-icons/fi";
import { api } from "../../services/api.js";
import { useSelector } from "react-redux";

export function CriarDisciplina() {
  const [nome, setNome] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [horario, setHorario] = useState("");
  const [local, setLocal] = useState("");
  const [nomeProfessor, setNomeProfessor] = useState("");
  const [material, setMaterial] = useState("");
  const [status, setStatus] = useState("Em andamento");

  const history = useHistory();

  const usuario = useSelector((state) => state?.usuario);
  useEffect(() => {
    console.log(usuario);
    if (!usuario) {
      history.push("/");
    }
  }, []);

  function submitCriarDisciplina(event) {
    event.preventDefault();

    console.log(nome, periodo, horario, local, nomeProfessor, material, status);

    api
      .post("disciplinas", {
        nome,
        periodo,
        horario,
        local,
        professor: nomeProfessor,
        material,
        status,
      })
      .then((response) => {
        console.log(response.data);
        history.push("/disciplinas"); //falta redux
      });
  }

  return (
    <div className="blocoCriarDisciplina">
      <form onSubmit={submitCriarDisciplina}>
        <div className="boxCriarDisciplina">
          <div className="headerCriarDisciplina">
            <h2 className="tituloCriarDisciplina">Criar Disciplina</h2>
            <FiCheckSquare size={40} color="black" />
          </div>
          <input
            type="text"
            id="nomeDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Digite nome da disciplina"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <input
            type="text"
            id="periodoDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Digite período da disciplina"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          ></input>
          <input
            type="text"
            id="horarioDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Digite horário da aula"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          ></input>
          <input
            type="text"
            id="localDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Digite local da aula"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          ></input>
          <input
            type="text"
            id="nomeProfessorDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Digite nome do professor responsável"
            value={nomeProfessor}
            onChange={(e) => setNomeProfessor(e.target.value)}
          ></input>
          <input
            type="text"
            id="materialDisciplina"
            className="inputsCriarDisciplina"
            placeholder="Insira link para acessar material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          ></input>
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Em andamento" id="statusDisciplinaEmAndamento">
              Em andamento
            </option>
            <option value="Concluida" id="statusDisciplinaConcluida">
              Concluída
            </option>
          </select>

          <button type="submit" id="btnCriarDisciplina">
            Criar
          </button>
        </div>
      </form>
    </div>
  );
}
