# language: pt
Funcionalidade: Entrar em uma conta

  Exibe um formulário para login juntamente com um botão
  de logar e cadastrar na parte inferior da página

Cenário: Logar
  Dado que é exibida a tela de Login
  E existe uma conta cadastrada:
    | id                   | valor                                |
    | nomeCompleto         | Ricardo Raimundo Richard Um Dos Dois |
    | nomeUsuario          | ricardinhoninja123                   |
    | nomeCurso            | Astrobiologia                        |
    | senhaUsuario         | RRRUDD123                            |
    | confirmaSenhaUsuario | RRRUDD123                            |
  E que o formulário esteja preenchido corretamente:
    | id                   | valor                                |
    | usuarioNome          | ricardinhoninja123                   |
    | usuarioSenha         | RRRUDD123                            |
  Quando clico no botão de logar
  Então é exibida a tela home
  E logo em minha conta

Cenário: Cadastrar
  Dado que é exibida a tela de Login
  Quando eu clico no botão de Cadastro
  Então a tela de cadastro é exibida
