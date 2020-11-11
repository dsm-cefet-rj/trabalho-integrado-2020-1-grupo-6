# language: pt
Funcionalidade: Cadastro de contas

  Exibe um formulário para cadastro juntamente com
  um botão de cadastrar na parte inferior da página

Dado que o formulário esteja preenchido corretamente:
  | id                   | valor                                |
  | nomeCompleto         | Ricardo Raimundo Richard Um Dos Dois |
  | nomeUsuario          | ricardinhoninja123                   |
  | nomeCurso            | Astrobiologia                        |
  | senhaUsuario         | RRRUDD123                            |
  | confirmaSenhaUsuario | RRRUDD123                            |
Quando clico no botão de criar conta
Então é criada uma nova conta com as informações entradas
