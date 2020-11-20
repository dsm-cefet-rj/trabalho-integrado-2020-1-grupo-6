import React from "react";
import ReactDOM from "react-dom";
import styles from "./home.css";
import { Link } from "react-router-dom";
import { FiCheckSquare } from "react-icons/fi";
import { useHistory } from "react-router-dom";

export function Home() {
  return (
    <div className="bloco_home">
      <div className="box_home">
        <div className="header_home">
          <h1 id="title">TaskBoard</h1>
          <FiCheckSquare size={45} color="#0629a9" />
        </div>
        <div className="op_home">
          {/* <Link to="/disciplinas" id="btnCadastrar">
           Minhas Disciplinas
          </Link>
          <Link to="/atividades" id="btnCadastrar">
           Minhas Atividades
          </Link>
          <Link to="/perfil" id="btnCadastrar">
           Meu Perfil
          </Link> */}

          


         
          {/* <button id="minhasAtividades">Minhas Atividades</button>
          <button id="meuPerfil">Meu perfil</button> */}
        </div>
      </div>
    </div>
  );
}

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/disciplinas");
  }
  return(
  <button id="minhasDisciplinas" onClick={handleClick}>Minhas Disciplinas</button>
  );
}





