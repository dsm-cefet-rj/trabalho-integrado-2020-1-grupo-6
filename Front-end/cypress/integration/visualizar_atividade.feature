# language: pt
Funcionalidade: Visualiza uma atividade

  Exibe as informações da atividade
  juntamente com as opções de editar e excluir

Cenário: Exibir atividade
  Quando a tela de visualizar atividade é acessada
  Então a atividade é exibida

Cenário: Editar atividade
  Dado que é exibida a tela de visualização de atividade
  Quando clico em editar atividade
  Então a tela de editar atividade é exibida

Cenário: Excluir atividade
  Dado que é exibida a tela de visualização de atividade
  Quando clico em excluir atividade
  Então é exibida a tela de listagem de atividades
  E a atividade é deletada
