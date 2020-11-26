# language: pt
Funcionalidade: Editar um perfil

  Exibe um formulário para editar um perfil juntamente
  com um botão de salvar na parte inferior da página

Cenário: Logar
  Dado que é exibida a tela de editar conta
  E que o formulário esteja preenchido corretamente:
    | id                 | valor               |
    | editarNomeCompleto | Ricardo Richard 122 |
    | editarNomeCurso    | Astronomia          |
  Quando clico no botão de salvar
  Então é feita a atualização dos valores da minha conta
