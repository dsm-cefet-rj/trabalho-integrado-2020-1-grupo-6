# language: pt
Funcionalidade: Edita uma atividade

  Exibe o formulário para edição de atividade
  juntamente com o botão de salvar

  Cenário: Editar atividade
    Dado que a tela de edição de atividade foi exibida
    E que o formulário seja preenchido corretamente:
      | id                              | valor                                        |
      | editarNomeAtividade             | Prova sobre buracos negros nada massivos     |
      | editarDataEntregaAtividade      | 15/11/2020                                   |
      | editarPontuacaoMaxAtividade     | 10,00                                        |
      | editarStatusAtividadeAguardando | true                                         |
      | editarStatusAtividadeConcluida  | false                                        |
      | editarTipoProvaAtividade        | true                                         |
      | editarTipoTrabalhoAtividade     | false                                        |
      | editarDescricaoAtividade        | Estudar sobre suas singularidades e evolução |
      | editarNotaFinalAtividade        | 09,00                                        |
      | editarArquivoAtividade          | bnnm.pdf                                     |
    Quando eu clico em salvar
    Então os campos da atividade são atualizados
    E a tela de visualização da atividade é exibida
