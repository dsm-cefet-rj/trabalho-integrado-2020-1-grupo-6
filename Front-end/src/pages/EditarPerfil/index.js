import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FiCheckSquare } from "react-icons/fi";
import styles from "./editarperfil.css";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../services/api.js";

export function EditarPerfil() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state?.usuario);

  useEffect(() => {
    setNome(usuario.nome);
    setCurso(usuario.curso);
  }, []);

  function submitEditarPerfil(event) {
    event.preventDefault();

    api
      .put("usuarios/" + usuario.id, {
        nome,
        curso,
        usuario: usuario.usuario,
        senha: usuario.senha,
      })
      .then((response) => {
        dispatch({
          type: "atualizarUsuario",
          payload: response.data,
        });

        history.push("/perfil");
      });
  }

  return (
    <div className="blocoEditarPerfil">
      <form onSubmit={submitEditarPerfil}>
        <div className="boxEditarPerfil">
          <div className="headerEditarPerfil">
            <h1 id="tituloEditarPerfil">Editar Perfil</h1>
            <FiCheckSquare size={45} color="black" />
          </div>

          <input
            id="editarNomeCompleto"
            className="inputsEditarPerfil"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>

          <input
            id="editarNomeCurso"
            className="inputsEditarPerfil"
            placeholder="Nome do Curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          ></input>

          <button type="submit" id="btnSalvarEdicaoPerfil">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
