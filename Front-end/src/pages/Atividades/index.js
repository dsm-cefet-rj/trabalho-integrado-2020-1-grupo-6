import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./atividades.css";
import { useHistory } from "react-router-dom";
import { FiArrowRight, FiCheckSquare } from "react-icons/fi";
export function Atividades() {
  const [Disciplina, setDisciplina] = useState("");
  const history = useHistory();

  function submitPerfil() {
    console.log(Disciplina);

    history.push("/home");
  }

 

  return (
    <div className="bloco_perfil">
      <div className="box_perfil">
        <div className="header_perfil">
          <h1 id="nome_app">Atividades</h1>
          <FiCheckSquare size={45} color="black" />
        </div>
        <form onSubmit={submitPerfil}>
          <div className="op_perfil">
            <h2 className="titulo_perfil"></h2>

            <input
              id="ProcurarDisciplina"
              className="inputs_perfil"
              placeholder="Atividade"
              value={Disciplina}
              onChange={(e) => setDisciplina(e.target.value)}
            ></input>
              <select name="Status" id="statusdisciplina">
                <option value="1">Em Andamento</option>
                <option value="2">Concluida</option>
                </select>
</div>

             </form>

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
