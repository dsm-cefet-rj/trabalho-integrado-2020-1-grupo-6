import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./perfil.css";
import { useHistory } from "react-router-dom";
import { FiArrowRight, FiCheckSquare } from "react-icons/fi";
import imgagemEscolhida from './src/voltar,jpeg'

export function Perfil() {
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
            <h1 id="nome_app">Meu Perfil</h1>
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
                type="nomeusuario"
                id="nomeusuario"
                className="inputs_perfil"
                placeholder="Nome de Usuario"
                value={nomeusuario}
                onChange={(e) => setNomeUsuario(e.target.value)}
              ></input>
              
              <input
                type="curso"
                id="curso"
                className="inputs_perfil"
                placeholder="Nome do Curso"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
              ></input>
                </div>
                
          </form>
          
  
              <div className="opeditar">
          <div className="opcaoum">
            <FiArrowRight size={35} color="white" />
            <Link to="/perfil/edit" className="itens" id="editarperfil">
              Editar
            </Link>
          </div>
          <div className="opcaodois">
            <FiArrowRight size={35} color="white" />
            <Link to="/atividades" className="itens" id="minhasAtividade">
              Excluir
            </Link>
            export default () => <img src={imgagemEscolhida}/>
          </div>
          
        </div> 
        
      </div>
      </div>
    );
  }

