# language: pt
Funcionalidade: Deletar atividade

  Deleta uma atividade

  Cenário: Deletar atividade
    Dado que acesso a tela da atividade
    Quando clico no botão excluir
    Então a atividade é deletada
    E a tela de listagem de atividades da disciplina é exibida
