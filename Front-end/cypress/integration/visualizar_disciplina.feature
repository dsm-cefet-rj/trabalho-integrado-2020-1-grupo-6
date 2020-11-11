# language: pt
Funcionalidade: Visualiza uma disciplina

  Exibe as informações da disciplina
  juntamente com as opções de editar e excluir

Cenário: Exibir disciplina
  Quando a tela de visualizar disciplina é acessada
  Então a disciplina é exibida

Cenário: Editar disciplina
  Dado que é exibida a tela de visualização de disciplina
  Quando clico em editar disciplina
  Então a tela de editar disciplina é exibida

Cenário: Excluir disciplina
  Dado que é exibida a tela de visualização de disciplina
  Quando clico em excluir disciplina
  Então é exibida a tela de listagem de disciplinas
  E a disciplina é deletada

Cenário: Visualizar atividade
  Dado que é exibida a tela de visualização de disciplina
  Quando clico em uma atividade
  Então é exibida a tela de visualização da atividade
