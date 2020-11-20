import React from "react";
import ReactDOM from "react-dom";
import { FiCheckSquare } from "react-icons/fi";
import styles from "./EditarDisciplina.css";


export function EditarDisciplina() {
  return (
    <div className="bloco_editardisciplina">
      <div className="box_editardisciplina">

        <div className="header_editardisciplina">
          <h2 className="titulo_editardisciplina">Editar Disciplina</h2>
          <FiCheckSquare size={40} color="#0629a9" />
        </div>
       
          <input
            type="text"
            id="editarNomeDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite nome da disciplina"
          ></input>
          <input
            type="text"
            id="editarPeriodoDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite período da disciplina"
          ></input>
          <input
            type="text"
            id="editarHorarioDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite horário das aulas"
          ></input>
          <input
            type="text"
            id="editarLocalDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite local das aulas"
          ></input>
          <input
            type="text"
            id="editarNomeProfessorDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite nome do professor responsável"
          ></input>
          <input
            type="text"
            id="editarMaterialDisciplina"
            className="inputs_editardisciplina"
            placeholder="Digite link para material da disciplina"
          ></input>

          
          <input type="radio" id="editarStatusDisciplinaEmAndamento" value="option1" name="editarStatus"></input>
          <label for="Em andamento">Em andamento</label>
          <input type="radio" id="editarStatusDisciplinaConcluida" value="option2" name="editarStatus"></input>
          <label for="Concluida">Concluída</label>

      
          <button type="submit" id="btnSalvaredicaoDisciplina">
            Salvar
          </button>


      </div>
    </div> 
  );
}
