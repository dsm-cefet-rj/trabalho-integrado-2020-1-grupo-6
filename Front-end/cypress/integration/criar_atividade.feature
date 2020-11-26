# language: pt
Funcionalidade: Cria uma nova atividade

  Exibe o formulário para criação de atividade
  juntamente com o botão de criar

  Cenário: Criar atividade
    Dado que o formulário seja preenchido corretamente:
      | id                        | valor                                                |
      | nomeAtividade             | Pesquisar sobre buracos negros super massivos        |
      | dataEntregaAtividade      | 15/10/2020                                           |
      | pontuacaoMaxAtividade     | 10,00                                                |
      | statusAtividadeAguardando | true                                                 |
      | statusAtividadeConcluida  | false                                                |
      | tipoProvaAtividade        | false                                                |
      | tipoTrabalhoAtividade     | true                                                 |
      | descricaoAtividade        | Pesquisar e descrever suas singularidades e evolução |
      | notaFinalAtividade        | 09,55                                                |
      | arquivoAtividade          | bnss.pdf                                             |
    Quando eu clico em criar
    Então a tela de exibição de atividades da disciplina é exibida
