import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./atividades.css";
import { useHistory } from "react-router-dom";
import { FiCheckSquare } from "react-icons/fi";
import { api } from "../../services/api";
import { useSelector } from "react-redux";

export function Atividades() {
  const usuario = useSelector((state) => state?.usuario);
  const [atividades, setAtividades] = useState([]);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");
  const history = useHistory();
  // console.log(usuario);

  useEffect(() => {
    if (!usuario) {
      history.push("/");
      return;
    }

    api
      .get("Atividades", {
        params: {
          idUsuario: usuario.id,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setAtividades(response.data);
      });
  }, []);

  console.log(Atividades);

  function requisicaoFiltrosAtividades() {
    api
      .get("Atividades", {
        params: {
          ...(filtroStatus && { status: filtroStatus }),
          ...(filtroNome && { nome: filtroNome }),
          idUsuario: usuario.id,
        },
      })
      .then((response) => {
        setAtividades(response.data);
      });
  }

  return (
    <div className="blocoAtividades">
      <div className="boxAtividades">
        <div className="headerAtividades">
          <h2 className="tituloAtividades">Atividades</h2>
          <FiCheckSquare size={40} color="black" />
        </div>

        <input
          id="pesquisaAtividade"
          placeholder="Atividade"
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
        ></input>

        <select
          name="Status"
          id="filtroAtividade"
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
        >
          <option value=""></option>
          <option value="Aguardando">Aguardando</option>
          <option value="Concluida">Concluida</option>
        </select>

        <button id="btnBuscaAtividade" onClick={requisicaoFiltrosAtividades}>
          Buscar
        </button>

        {atividades.length > 0 ? (
          <table id="tabelaAtividades">
            <thead>
              <tr>
                <th>Atividade</th>
                <th>Data de Entrega</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {atividades.map((atividade) => (
                <tr key={atividade.id}>
                  <td>
                    <Link
                      id="nomeAtividadeTabela"
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
    </div>
  );
}
