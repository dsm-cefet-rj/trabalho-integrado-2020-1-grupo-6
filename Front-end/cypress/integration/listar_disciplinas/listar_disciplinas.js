// This will be a new feature implementation on cypress

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que temos disciplinas cadastradas', async function (disciplinas) {
    this.disciplinas = disciplinas.hashes();
    var i = 0;

    for(let d of this.disciplinas){

        let d_cast = {
            ...d,
            id: parseInt(d.id)
        }
        this.disciplinas[i] = d_cast;
        
    }

});

When('clico em Minhas disciplinas na Home', () => cy.visit('./'));

Then('as disciplinas são exibidas', function() {
    
});