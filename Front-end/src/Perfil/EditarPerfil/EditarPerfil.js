import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FiCheckSquare, FiCornerDownLeft } from "react-icons/fi";
import styles from "./EditarPerfil.css";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../services/api.js";

/**
 * @module usuarios/Editar
 */

/**
 * @typedef Usuário
 * @type {object}
 * @property {String} nome - nome completo do usuário
 * @property {String} curso- nome do curso
 * @property {String} idUsuario - identificador do usuário
 *
 *
 *
 */

/**
 *
 * Edita informações dos campos da disciplina do usuário.
 * Para isso, faz uma requisição GET para pegar as informações da disciplina e adicionar nos inputs para melhor visualização.
 *
 */

export function EditarPerfil() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const usuario =
    useSelector((state) => state?.usuario) ||
    JSON.parse(localStorage.getItem("USUARIO"));

  // console.log(usuario);

  useEffect(() => {
    api
      .get("/perfil/", {
        params: {
          idUsuario: usuario,
        },
      })
      .then((response) => {
        setNome(response.data.nome);
        console.log(response.data.nome);
        setCurso(response.data.curso);
      });
  }, []);

  /**
   * Faz requisição PUT para editar os campos do perfil do usuário
   * @function submitEditarPerfil
   */

  function submitEditarPerfil(event) {
    event.preventDefault();
    console.log(usuario);
    api

      .put("/editperfil/", {
        params: {
          idUsuario: usuario,
        },
      })
      .then((response) => {
        dispatch({
          type: "atualizarUsuario",
          payload: response.data,
        });

        history.push("/perfil");
      });
  }

  /**
   * Ao clicar no botão de voltar, redireciona o usuário para a página de visualização do perfil do usuário
   * @function toPerfil
   */

  function toPerfil() {
    history.push("/perfil");
  }

  return (
    <div className="blocoEditarPerfil">
      <form onSubmit={submitEditarPerfil}>
        <div className="boxEditarPerfil">
          <div className="headerEditarPerfil">
            <FiCornerDownLeft
              id="voltarPerfil"
              onClick={toPerfil}
              size={40}
              color="black"
            />

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
