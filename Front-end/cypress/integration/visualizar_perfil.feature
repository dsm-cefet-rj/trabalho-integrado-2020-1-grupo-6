# language: pt
Funcionalidade: Visualiza o perfil do usuário

  Exibe as informações do perfil do usuário
  juntamente com as opções de editar e excluir

Cenário: Exibir perfil
  Quando a tela de visualizar perfil é acessada
  Então o perfil é exibido

Cenário: Editar perfil
  Dado que é exibida a tela de visualização do perfil
  Quando clico em editar perfil
  Então a tela de editar perfil é exibida

Cenário: Excluir perfil
  Dado que é exibida a tela de visualização do perfil
  Quando clico em excluir perfil
  Então é exibida a tela inicial
  E o perfil é deletado
