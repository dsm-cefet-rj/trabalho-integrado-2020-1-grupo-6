import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import styles from "./verdisciplina.css";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../../services/api.js";

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
  const { disciplinaID } = useParams();
  // console.log(disciplinaID);

  const usuario =
    useSelector((state) => state?.usuario) ||
    JSON.parse(localStorage.getItem("USUARIO"));
  // console.log(usuario);

  useEffect(() => {
    // if (!usuario) {
    //   history.push("/");
    //   return;
    // }

    api
      .get("disciplinas/" + disciplinaID, {
        params: {
          idUsuario: usuario.id,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setNome(response.data.nome);
        setPeriodo(response.data.periodo);
        setHorario(response.data.horario);
        setLocal(response.data.local);
        setNomeProfessor(response.data.professor);
        setMaterial(response.data.material);
        setStatus(response.data.status);
      });

    api
      .get("atividades", {
        params: {
          idDisciplina: disciplinaID,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setAtividades(response.data);
      });
  }, []);

  function toCriarAtividade() {
    dispatch({
      type: "criarAtividade",
      payload: disciplinaID,
    });
    history.push("/atividades/create");
  }

  function toEditarDisciplina() {
    history.push("/disciplinas/edit/" + disciplinaID);
  }

  function toRemoveDisciplina() {
    api.delete("disciplinas/" + disciplinaID).then((response) => {
      history.push("/disciplinas");
    });
  }

  return (
    <div className="blocoVerDisciplina">
      <div className="boxVerDisciplina">
        <div className="headerVerDisciplina">
          <h1 id="tituloVerDisciplina">{nome}</h1>
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

        <div>
          <select name="Status" id="filtroAtividadeDisciplina">
            <option value=""></option>
            <option value="Aguardando">Aguardando</option>
            <option value="Concluida">Concluida</option>
          </select>
        </div>
      </div>
      {atividades.length > 0 ? (
        <table id="tabelaAtividadesDisciplina" border="1">
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
    </div>
  );
}
