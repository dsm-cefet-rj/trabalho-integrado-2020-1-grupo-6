// This will be a new feature implementation on cypress

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que temos disciplinas cadastradas", () => {
    
    cy.visit('./')
    cy.get('#usuarioLogin').type('soutog')
    cy.get('#usuarioSenha').type(1234)
    cy.get('#btnEntrar').click()
    cy.url().should('eq', 'http://localhost:3000/home')

    cy.get('#minhasDisciplinas').click()
    cy.url().should('eq', 'http://localhost:3000/disciplinas')

}); 

When('clico em Minhas disciplinas na Home', () => cy.visit('./disciplinas'));

Then('as disciplinas são exibidas', function () {
    cy.get('#tabelaDisciplinas').click()
    cy.url().should('eq', 'http://localhost:3000/disciplinas')
   
    
});

When("digito o nome da disciplina que desejo visualizar", () => {
    cy.get('#pesquisaDisciplina').type('matematica')
    cy.get('#btnBuscaDisciplina').click()
});

Then('é exibida na tela de listagem de disciplinas', function () {
    cy.get('#nomeDisciplinaTabela') //.click()
    cy.url().should('eq', 'http://localhost:3000/disciplinas')
});
And("apenas a disciplina encontrada está nela", function () {

});


 