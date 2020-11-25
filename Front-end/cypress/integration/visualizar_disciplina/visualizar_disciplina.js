import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que é exibida a tela de visualização de disciplina", () => {
    cy.visit('./')

    cy.get('#usuarioLogin').type('soutog')
    cy.get('#usuarioSenha').type(1234)

    cy.get('#btnEntrar').click()

    cy.get('#minhasDisciplinas').click()
}) 


When("clico em uma disciplina", () => {
    cy.get('#nomeDisciplinaTabela').click()

    
})

Then("a tela de editar disciplina é exibida", () =>{
    cy.visit()
})

// // excluir disciplina
// When("clico em excluir disciplina")

// Then("é exibida a tela de listagem de disciplinas")

// And("a disciplina é deletada")

// //visualizar disciplina
// When("clico em uma atividade")

// Then("é exibida a tela de visualização da atividade")