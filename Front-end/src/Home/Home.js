import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Home.css";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckSquare } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * @module usuarios/Home
 */

/**
 * @typedef Usuário
 * @type {object}
 * @property {String} idUsuario - identificador do usuário
 *
 */

/**
 *
 * Mostra um menu para utilização da aplicação, com as opções "Minhas disciplinas", "Minhas atividades" e "Meu Perfil"
 *
 */

export function Home() {
  const history = useHistory();
  const usuario =
    useSelector((state) => state?.usuario) ||
    JSON.parse(localStorage.getItem("USUARIO"));
  useEffect(() => {
    if (!usuario) {
      history.push("/");
    }
  }, []);

  return (
    <div className="bloco_home">
      <div className="box_home">
        <div className="header_home">
          <h1 id="title">TaskBoard</h1>
          <FiCheckSquare size={45} color="black" />
        </div>

        <div className="op_home">
          <div className="opcao">
            <FiArrowRight size={35} color="white" />
            <Link to="/disciplinas" className="itens" id="minhasDisciplinas">
              Minhas Disciplinas
            </Link>
          </div>
          <div className="opcao">
            <FiArrowRight size={35} color="white" />
            <Link to="/atividades" className="itens" id="minhasAtividade">
              Minhas Atividades
            </Link>
          </div>
          <div className="opcao">
            <FiArrowRight size={35} color="white" />
            <Link to="/perfil" className="itens" id="meuPerfil">
              Meu perfil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
