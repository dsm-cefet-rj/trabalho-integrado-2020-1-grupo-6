import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./perfil.css";
import { useHistory } from "react-router-dom";
import { FiCheckSquare } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../../services/api";

export function Perfil() {
  const [nome, setNome] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [curso, setCurso] = useState("");
  const history = useHistory();
  const usuario =
    useSelector((state) => state?.usuario) ||
    JSON.parse(localStorage.getItem("USUARIO"));

  useEffect(() => {
    // if (!usuario) {
    //   history.push("/");
    //   return;
    // }
  }, []);

  function toEditarPerfil(event) {
    event.preventDefault();
    history.push("/perfil/edit");
  }

  function toExcluirPerfil() {
    api.delete("usuarios/" + usuario.id).then((response) => {
      history.push("/");
    });
  }

  return (
    <div className="blocoPerfil">
      <div className="boxPerfil">
        <div className="headerPerfil">
          <h1 id="tituloPerfil">Meu Perfil</h1>
          <FiCheckSquare size={40} color="black" />
        </div>

        <div className="opPerfil">
          <div className="itemsPerfil">Nome completo: {usuario.nome}</div>
          <div className="itemsPerfil">Nome de usuário: {usuario.usuario}</div>
          <div className="itemsPerfil">Curso: {usuario.curso}</div>
        </div>

        <div className="btns">
          <button id="btnEditarPerfil" onClick={toEditarPerfil}>
            Editar
          </button>
          <button id="btnExcluirPerfil" onClick={toExcluirPerfil}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
