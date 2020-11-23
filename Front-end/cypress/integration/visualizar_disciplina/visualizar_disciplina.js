import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que é exibida a tela de visualização de disciplina")

// editar disciplina
When("clico em editar disciplina")

Then("a tela de editar disciplina é exibida")

// excluir disciplina
When("clico em excluir disciplina")

Then("é exibida a tela de listagem de disciplinas")

And("a disciplina é deletada")

//visualizar disciplina
When("clico em uma atividade")

Then("é exibida a tela de visualização da atividade")