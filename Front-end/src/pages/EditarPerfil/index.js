import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FiArrowRight, FiCheckSquare } from "react-icons/fi";
import styles from "./editarperfil.css";

export function EditarPerfil() {
 
  const [nomecompleto, setNomeCompleto] = useState("");
    const [nomeusuario, setNomeUsuario] = useState("");
    const [curso, setCurso] = useState("");
    const history = useHistory();
  
    function submitPerfil() {
      console.log(nomecompleto, nomeusuario, curso);
  
      history.push("/home");
    }

   
  
    return (
      <div className="bloco_perfil">
        <div className="box_perfil">
          <div className="header_perfil">
            <h1 id="nome_app">Editar Perfil</h1>
            <FiCheckSquare size={45} color="black" />
          </div>
          <form onSubmit={submitPerfil}>
            <div className="op_perfil">
              <h2 className="titulo_perfil"></h2>
  
              <input
                id="NomeCompleto"
                className="inputs_perfil"
                placeholder="Nome Completo"
                value={nomecompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
              ></input>
               
               <input
                type="curso"
                id="curso"
                className="inputs_perfil"
                placeholder="Nome do Curso"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
              ></input>
       
       <div className="BotaoSalvar">
       <button type="submit" id="btnSalvar">
              Salvar
            </button>
            </div>   
            </div> 
          </form>
          
          </div>
      </div>
      );

}
