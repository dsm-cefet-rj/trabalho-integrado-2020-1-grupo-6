import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que é exibida a tela de visualização de disciplina", () => {
    
    cy.visit('./')
    cy.get('#usuarioLogin').type('soutog')
    cy.get('#usuarioSenha').type(1234)
    cy.get('#btnEntrar').click()
    cy.url().should('eq', 'http://localhost:3000/home')

    cy.get('#minhasDisciplinas').click()
    cy.url().should('eq', 'http://localhost:3000/disciplinas')

}); 


When("clico em uma disciplina", () => {
    cy.get('#nomeDisciplinaTabela').should('have.attr', 'href')
    cy.get('#nomeDisciplinaTabela').click()
});

Then("a tela de editar e excluir a disciplina é exibida", () => { 
    cy.url().should('eq', 'http://localhost:3000/disciplinas/view/3LksGA_')
});

And('a disciplina criada está presente', () => {
});