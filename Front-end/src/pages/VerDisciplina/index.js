import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FiArrowRight, FiCheckSquare } from "react-icons/fi";
import styles from "./verdisciplina.css";

export function VerDisciplina() {
  const [Periodo, setPeriodo] = useState("");
  const [Horario, setHorario] = useState("");
  const [Local, setLocal] = useState("");
  const [Professor, setProfessor] = useState("");
  const [Material, setMaterial] = useState("");
  const history = useHistory();

  function submitPerfil() {
    console.log(Periodo, Horario, Local, Professor, Material );

    history.push("/home");
  }


 

  return (
    <div className="bloco_perfil">
      <div className="box_perfil">
        <div className="header_perfil">
          <h1 id="nome_app">NomeAtividade</h1>
          <FiCheckSquare size={45} color="black" />
        </div>
        <div className="dadosdisciplina">
        <select name="Status" id="statusdisciplina">
                <option value="1">Em Andamento</option>
                <option value="2">Concluida</option>
                </select>
                 


                </div>
        <form onSubmit={submitPerfil}>
          <div className="op_perfil">
            <h2 className="titulo_perfil"></h2>

            <input
              id="Periodo"
              className="inputs_perfil"
              placeholder="Periodo"
              value={Periodo}
              onChange={(e) => setPeriodo(e.target.value)}
            ></input>
            <input
              id="Horario"
              className="inputs_perfil"
              placeholder="Horario"
              value={Horario}
              onChange={(e) => setHorario(e.target.value)}
            ></input>
            <input
              id="Local"
              className="inputs_perfil"
              placeholder="Local"
              value={Local}
              onChange={(e) => setLocal(e.target.value)}
            ></input>
            <input
              id="Professor"
              className="inputs_perfil"
              placeholder="Professor"
              value={Professor}
              onChange={(e) => setProfessor(e.target.value)}
            ></input>
            <input
              id="Material"
              className="inputs_perfil"
              placeholder="Material"
              value={Material}
              onChange={(e) => setMaterial(e.target.value)}
            ></input>
      
              
</div>

             </form>
             <div className="header_perfil">
          <h1 id="nome_app">Atividades</h1>
        
        </div>

        <div className="atividades">
        <select name="Status" id="statusatividades">
                <option value="1">Aguardando</option>
                <option value="2">Concluida</option>
                <option value="3">Todas</option>
                </select>
                 


                </div>


             <div>



             </div>
             <table id="tabledisciplinas" class="table table-striped" border="1">   
        <td>Atividade</td>
        <td>Data De Entrega</td>
        <td>Status</td>
   
    <tbody id="myTable"></tbody>
</table>


             </div> 
             
             
             
             </div>
            );
          

          }
