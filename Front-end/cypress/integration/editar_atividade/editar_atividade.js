import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

let formulario;

Given('que a tela de edição de atividade foi exibida', () => {
  cy.visit('./');
  cy.get('#usuarioLogin').type('teste');
  cy.get('#usuarioSenha').type('teste');
  cy.get('#btnEntrar').click();
  cy.get('#minhasAtividade').click();
  cy.get('#nomeAtividadeTabela').click();
  cy.get('#editarAtividade').click();
  cy.url().should('include', '/atividades/edit');
});

And('que o formulário seja preenchido corretamente:', () => {
  // Select sem ID
  formulario = {
    'editarNomeAtividade': 'teste edição nome',
    'editarDataEntregaAtividade': 'teste edição entrega',
    'editarPontuacaoMaxAtividade': 'teste edição',
    'editraDescricaoAtividade': 'teste edição',
    'editarNotaFinalAtividade': 'teste edição',
    'editarArquivoAtividade': 'teste edição',
  };

  for(let key of Object.keys(formulario)) {
    cy.get(`#${key}`).type(formulario[key]);
  }
});

When('eu clico em salvar', () => {
  cy.get('#btnSalvarEdicaoAtividade').click();
});

Then('os campos da atividade são atualizados', () => {});

And('a tela de visualização da atividade é exibida', () => {
  cy.url().should('include', '/atividades/view');
});