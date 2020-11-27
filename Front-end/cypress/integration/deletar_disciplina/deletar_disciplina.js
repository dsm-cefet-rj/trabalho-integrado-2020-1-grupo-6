import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('que acesso a tela da disciplina', () => {
  cy.visit('./');
  cy.get('#usuarioLogin').type('teste');
  cy.get('#usuarioSenha').type('teste');
  cy.get('#btnEntrar').click();
  cy.get('#minhasDisciplinas').click();
  cy.get('#nomeDisciplinaTabela').click();
});

When('clico no botão excluir', () => {
  cy.get('#excluirDisciplina').click();
});

Then('a disciplina é deletada', () => {});

And('a tela de listagem de disciplinas é exibida', () => {
  cy.url().should('include', '/disciplinas');
});