import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('Dado que o formulario seja preenchido corretamente', async function(disciplinas){
    this.disciplinas = disciplinas.hashes(); 
    var i = 0; 

    for(let d of this.disciplinas){
        let d_cast = {
            ...d,
            id: parseInt(d.id),
        }
        this.disciplinas[i] = d_cast;
        await window.fetch('http://localhost:3000/'); // mudar o redirecionamento
        await window.fetch('http://localhost:3000/', {method: 'POST', body: JSON.stringify(p_cast),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });
        i++;
    }

    
});

When('clico em salvar', () => cy.get('#btnSalvaredicaoDisciplina').click());

Then('Os campos da disciplina são atuallizados', function(){

});

// listar todas as disciplinas. (visitar a pagina)
And("A tela de visualização é exibida", () => cy.visit('./listar_disciplinas'));
