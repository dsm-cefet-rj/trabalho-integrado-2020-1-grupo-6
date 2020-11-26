import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

let formulario;

Given('que o formulário seja preenchido corretamente:', () => {
  formulario = {
    'nomeAtividade': 'matematica',
    'dataEntregaAtividade': '2020.2',
    'pontuacaoMaxAtividade': '18:20',
    'descricaoAtividade': 'Pavilhão 7',
    'notaFinalAtividade': 'Carl Sagan',
    'arquivoAtividade': 'https://www.indeed.com/career-advice/careers/what-does-an-astronomer-do',
    'status': 'Em andamento',
  };

  cy.visit('./');
  cy.get('#usuarioLogin').type('teste');
  cy.get('#usuarioSenha').type('teste');
  cy.get('#btnEntrar').click();
  cy.get('#minhasDisciplinas').click();
  cy.get('nomeDisciplinaTabela').click();
  cy.get('#adicionarAtividade').click();

  cy.url().should('eq', 'http://localhost:3000/atividades/create');
  for(let key of Object.keys(formulario)) {
    cy.get(`#${key}`).type(formulario[key]);
  }
});

When('eu clico em criar', () => {
  cy.get('#btnCriarAtividade').click();
});

Then('a tela de exibição de atividades da disciplina é exibida', () => {
  cy.url().should('eq', 'http://localhost:3000/disciplinas');
});