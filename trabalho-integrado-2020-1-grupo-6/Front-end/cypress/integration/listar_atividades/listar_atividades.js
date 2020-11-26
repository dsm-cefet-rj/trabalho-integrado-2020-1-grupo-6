import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que temos atividades cadastradas na respectiva disciplina', () => {
    cy.visit('./');
    cy.get('#usuarioLogin').type('soutog');
    cy.get('#usuarioSenha').type(1234);
    cy.get('#btnEntrar').click();
    cy.url().should('eq', 'http://localhost:3000/home');
    
})

When('eu clico em Minhas Atividades na Home', () => {
    cy.get('#minhasAtividade').click();
})

Then('a listagem de atividades é exibida', () => {
    cy.url().should('eq', 'http://localhost:3000/atividades');
})