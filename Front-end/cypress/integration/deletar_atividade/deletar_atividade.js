import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('que acesso a tela da atividade', () => {
  cy.visit('./');
  cy.get('#usuarioLogin').type('teste');
  cy.get('#usuarioSenha').type('teste');
  cy.get('#btnEntrar').click();
  cy.get('#minhasAtividade').click();
  cy.get('#nomeAtividadeTabela').click();
  cy.url().should('include', '/atividades/view');
});

When('clico no botão excluir', () => {
  cy.get('#excluirAtividade').click();
});

Then('a atividade é deletada', () => {});

And('a tela de listagem de atividades da disciplina é exibida', () => {
  cy.url().should('include', '/disciplinas/view');
});