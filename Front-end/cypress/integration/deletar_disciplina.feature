# language: pt
Funcionalidade: Deletar disciplina

  Deleta uma disciplina

  Cenário: Deletar disciplina
    Dado que acesso a tela da disciplina
    Quando clico no botão excluir
    Então a disciplina é deletada
    E a tela de listagem de disciplinas é exibida
