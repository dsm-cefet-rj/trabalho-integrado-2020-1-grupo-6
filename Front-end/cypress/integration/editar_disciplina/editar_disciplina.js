import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let formulario;

Given('que o formulário seja preenchido corretamente:', () => {
    formulario = {
      'editarNomeDisciplina': 'Matematica',
      'editarPeriodoDisciplina': '2020.1',
      'editarHorarioDisciplina': '18:40',
      'editarLocalDisciplina': 'Pavilhão 5',
      'editarNomeProfessorDisciplina': 'Diogo',
      'editarMaterialDisciplina': 'https://www.sciencedirect.com/topics/earth-and-planetary-sciences/planetary-evolution',
    //   'editarStatus': 'Em andamento',
    };

    cy.visit('./');
    cy.get('#usuarioLogin').type('soutog');
    cy.get('#usuarioSenha').type(1234);
    cy.get('#btnEntrar').click();
    cy.url().should('eq', 'http://localhost:3000/home');
    cy.get('#minhasDisciplinas').click();
    cy.url().should('eq', 'http://localhost:3000/disciplinas');
    
    cy.get('#nomeDisciplinaTabela').should('have.attr', 'href');
    cy.get('#nomeDisciplinaTabela').click();
    cy.url().should('eq', 'http://localhost:3000/disciplinas/view/3LksGA_');

    cy.url().should('eq', 'http://localhost:3000/disciplinas/view/3LksGA_');
    cy.get('#editarDisciplina').click();

    cy.url().should('eq', 'http://localhost:3000/disciplinas/edit/3LksGA_');

    for(let key of Object.keys(formulario)) {
        // if(cy.get(`#${key}`) !== cy.get("#editarStatus")){
        //     cy.get(`#${key}`).clear();
        // }
        cy.get(`#${key}`).clear();
        cy.get(`#${key}`).type(formulario[key]);
    }
});

When('eu clico em salvar', () => {
    cy.get('#btnSalvaredicaoDisciplina').click();
});


Then('a tela de visualização da disciplina é exibida', () => {
    cy.url().should('eq', 'http://localhost:3000/disciplinas/view/3LksGA_');
});
