import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./veratividade.css";
import { useHistory } from "react-router-dom";
import { FiArrowRight, FiCheckSquare } from "react-icons/fi";

export function VerAtividade() {
  const [Disciplina, setDisciplina] = useState("");
  const [DataEntrega, setDataEntrega] = useState("");
  const [Descrição, setDescrição] = useState("");
  const [PontuaçãoMax, setPontuaçãoMax] = useState("");
  const [Nota, setNota] = useState("");
  const [Arquivo, setArquivo] = useState("");
  const history = useHistory();

  function submitPerfil() {
    console.log(Disciplina,DataEntrega, Descrição, PontuaçãoMax, Nota, Arquivo );

    history.push("/home");
  }


 

  return (
    <div className="bloco_perfil">
      <div className="box_perfil">
        <div className="header_perfil">
          <h1 id="nome_app">Prova/Atividade</h1>
          <FiCheckSquare size={45} color="black" />
        </div>
        <input
              id="Disciplina"
              className="inputs_perfil"
              placeholder="Disciplina"
              value={Disciplina}
              onChange={(e) => setDisciplina(e.target.value)}
            ></input>

        <div className="dadosdisciplina">
        <select name="Status" id="statusdisciplina">
                <option value="1">Aguardando</option>
                <option value="2">Concluida</option>
                </select>
                 


                </div>
        <form onSubmit={submitPerfil}>
          <div className="op_perfil">
            <h2 className="titulo_perfil"></h2>

            <input
              id="DataEntrega"
              className="inputs_perfil"
              placeholder="Data de Entrega"
              value={DataEntrega}
              onChange={(e) => setDataEntrega(e.target.value)}
            ></input>
            <input
              id="Descrição"
              className="inputs_perfil"
              placeholder="Descrição"
              value={Descrição}
              onChange={(e) => setDescrição(e.target.value)}
            ></input>
            <input
              id="PontuaçãoMax"
              className="inputs_perfil"
              placeholder="PontuaçãoMaxima"
              value={PontuaçãoMax}
              onChange={(e) => setPontuaçãoMax(e.target.value)}
            ></input>
            <input
              id="Nota"
              className="inputs_perfil"
              placeholder="Nota"
              value={Nota}
              onChange={(e) => setNota(e.target.value)}
            ></input>
            <input
              id="Arquivo"
              className="inputs_perfil"
              placeholder="Arquivo"
              value={Arquivo}
              onChange={(e) => setArquivo(e.target.value)}
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
