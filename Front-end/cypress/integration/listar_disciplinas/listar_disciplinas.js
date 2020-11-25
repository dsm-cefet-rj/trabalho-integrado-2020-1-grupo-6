// This will be a new feature implementation on cypress

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//import cy from "cypress"

Given('que temos disciplinas cadastradas', async function (disciplinas) {
    this.disciplinas = disciplinas.hashes();
    var i = 0;

    for(let d of this.disciplinas){

        let d_cast = {
            ...d,
            id: parseInt(d.id)
        }
        this.disciplinas[i] = d_cast;
        await window.fetch('http://192.168.0.13:3000/disciplinas/' + d.id, {method: 'DELETE'})
        await window.fetch('http://192.168.0.13:3000/disciplinas/', {method: 'POST', body: JSON.stringify(d_cast),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        i++;
    }

});

/*When('clico em Minhas disciplinas na Home', () => cy.visit('./disciplinas'));

Then('as disciplinas são exibidas', function() {
    for (let d of this.disciplinas){
        //nome da disciplina
        cy.get(d.id)
            .contains(d.Nome)
            .should('be.visible');

        //dados da disciplina
        cy.get(d.id)
            .contains(d.status)
            .should('be.visible')

    }
    
});*/