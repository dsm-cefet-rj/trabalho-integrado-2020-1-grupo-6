import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

let formulario;

Given('que o formulário seja preenchido corretamente:', () => {
  formulario = {
    'nomeDisciplina': 'Evolução estelar',
    'periodoDisciplina': '2020.2',
    'horarioDisciplina': '18:20',
    'localDisciplina': 'Pavilhão 7',
    'nomeProfessorDisciplina': 'Carl Sagan',
    'materialDisciplina': 'https://www.indeed.com/career-advice/careers/what-does-an-astronomer-do',
    'status': 'Em andamento',
  };

  cy.visit('./');
  cy.get('#usuarioLogin').type('teste');
  cy.get('#usuarioSenha').type('teste');
  cy.get('#btnEntrar').click();
  cy.get('#minhasDisciplinas').click();
  cy.get('#adicionarDisciplina').click();

  cy.url().should('eq', 'http://localhost:3000/disciplinas/create');
  for(let key of Object.keys(formulario)) {
    cy.get(`#${key}`).type(formulario[key]);
  }
});

When('eu clico em criar', () => {
  cy.get('#btnCriarDisciplina').click();
});

Then('a pagina de listagem de disciplina é exbida', () => {
  cy.url().should('eq', 'http://localhost:3000/disciplinas');
});

And('a disciplina criada está presente', () => {
});