import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./atividades.css";
import { useHistory } from "react-router-dom";
import { FiCheckSquare, FiCornerDownLeft } from "react-icons/fi";
import { api } from "../../services/api";
import { useSelector } from "react-redux";

export function Atividades() {
  const usuario =
    useSelector((state) => state?.usuario) ||
    JSON.parse(localStorage.getItem("USUARIO"));
  const [atividades, setAtividades] = useState([]);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");
  const history = useHistory();
  const [disciplinas, setDisciplinas] = useState({});

  useEffect(() => {
    // if (!usuario) {
    //   history.push("/");
    //   return;
    // }

    api
      .get("/mostrarAtividades", {
        params: {
          idUsuario: usuario,
        },
      })
      .then((response) => {
        console.log(response.data);

        setAtividades(response.data);
        console.log(atividades);
        const _disciplinas = {};
        Promise.all(
          response.data.map((atividade) => {
            if (
              !atividade.idDisciplina ||
              atividade.idDisciplina in _disciplinas
            ) {
              return;
            }
            _disciplinas[atividade.idDisciplina] = atividade.idDisciplina;
            return api.get("disciplinas/" + atividade.idDisciplina);
          })
        ).then((disc) => {
          const disciplinas__ = {};
          disc.map((res) => {
            if (!res) {
              return;
            }
            disciplinas__[res.data.id] = res.data;
          });
          setDisciplinas(disciplinas__);
        });
      });
  }, []);

  function requisicaoFiltrosAtividades() {
    api
      .get("/FiltroAtividades/:id", {
        params: {
          ...(filtroStatus && { status: filtroStatus }),
          ...(filtroNome && { nome_filter: filtroNome }),
          idUsuario: usuario,

        },
      })
      .then((response) => {
        setAtividades(response.data);
      });
  }

  function toHome(){
    history.push("/home");
    window.location.reload();
  }


  return (
    <div className="blocoAtividades">
      <div className="boxAtividades">
        <div className="headerAtividades">
        <FiCornerDownLeft
           id="voltarHome"
           onClick={toHome}
           size={40}
           color="black"
           />
         

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

        {atividades.length > 0 && disciplinas ? (
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

                      <h5 id="nomeDisciplina_">
                        {disciplinas[atividade.idDisciplina]?.nome}
                      </h5>
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
