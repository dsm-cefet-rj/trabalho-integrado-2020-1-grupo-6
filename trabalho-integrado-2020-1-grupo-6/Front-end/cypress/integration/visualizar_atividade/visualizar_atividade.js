import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que a tela de visualização de atividades é acessada", () => {
    
    cy.visit('./')
    cy.get('#usuarioLogin').type('soutog')
    cy.get('#usuarioSenha').type(1234)
    cy.get('#btnEntrar').click()
    cy.url().should('eq', 'http://localhost:3000/home')

    cy.get('#minhasAtividade').click()
    cy.url().should('eq', 'http://localhost:3000/atividades')

}); 
When("clico em uma atividade", () => {
    cy.get('#nomeAtividadeTabela').should('have.attr', 'href')
    cy.get('#nomeAtividadeTabela').click()
});


Then("a atividade é exibida", () => cy.url().should('eq', 'http://localhost:3000/atividades/view/5'));

/* When("clico em excluir atividade", () => cy.get('#btnRemoverAtividade').click());

Then("é exibida a tela de visualização da disciplina", () => { 
    cy.url().should('eq', 'http://localhost:3000/disciplinas/view/Wa-7kqD')
}); */