import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./VerPerfil.css";
import { useHistory } from "react-router-dom";
import { FiCheckSquare, FiCornerDownLeft } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../../services/api";

/**
 * @module usuarios/Perfil
 */

/**
 @typedef Usuário
 * @type {object}
 * @property {String} nome - nome completo do usuário
 * @property {String} usuario - nome de usuário 
 * @property {String} curso- nome do curso
 * @property {String} idUsuario - identificador do usuário
 */

/**
 *
 * Permite que usuário visualize seu perfil.
 * Para isso, faz requisição GET, pegando o perfil relacionado ao idUsuário
 *
 *
 */

export function VerPerfil() {
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

    api
      .get("/perfil/", {
        params: {
          idUsuario: typeof usuario == "object" ? usuario.usuario : usuario,
        },
      })
      .then((response) => {
        setNome(response.data.nome);
        setNomeUsuario(usuario);
        setCurso(response.data.curso);
      });
  }, []);

  /**
   * Ao clicar no botão de editar, usuário é redirecionado para página de editar perfil
   * @function toEditarPerfil
   */

  function toEditarPerfil(event) {
    event.preventDefault();
    history.push("/perfil/edit");
  }

  /**
   * Ao clicar no botão de excluir, usuário é excluído e redirecionado para página inicial
   * @function toExcluirPerfil
   */

  function toExcluirPerfil() {
    api.delete("/usuario/" + usuario).then((response) => {
      history.push("/");
    });
  }

  /**
   *Ao clicar na seta para voltar, redireciona o usuário para página Home.
   * @function toHome
   */

  function toHome() {
    history.push("/home");
  }

  return (
    <div className="blocoPerfil">
      <div className="boxPerfil">
        <div className="headerPerfil">
          <FiCornerDownLeft
            id="voltarHome"
            onClick={toHome}
            size={40}
            color="black"
          />

          <h1 id="tituloPerfil">Meu Perfil</h1>
          <FiCheckSquare size={40} color="black" />
        </div>

        <div className="opPerfil">
          <div className="itemsPerfil">Nome completo: {nome}</div>
          <div className="itemsPerfil">
            Nome de usuário:{" "}
            {typeof usuario == "object" ? usuario.usuario : usuario}
          </div>
          <div className="itemsPerfil">Curso: {curso}</div>
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
