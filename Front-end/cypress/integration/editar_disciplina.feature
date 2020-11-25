# language: pt
Funcionalidade: Edita uma disciplina

    Exibe o formulário para edição de disciplina
    juntamente com o botão de salvar

    Contexto:
        Dado que o formulário seja preenchido corretamente:
          | id                                | valor                                                                                 |
          | editarNomeDisciplina              | Evolução Planetária                                                                   |
          | editarPeriodoDisciplina           | 2020.1                                                                                |
          | editarHorarioDisciplina           | 18:40                                                                                 |
          | editarLocalDisciplina             | Pavilhão 5                                                                            |
          | editarNomeProfessorDisciplina     | Carl Sagan                                                                            |
          | editarMaterialDisciplina          | https://www.sciencedirect.com/topics/earth-and-planetary-sciences/planetary-evolution |
          | editarStatusDisciplinaEmAndamento | true                                                                                  |
          | editarStatusDisciplinaConcluida   | false                                                                                 |

    Cenário: Editar disciplina cadastradas
        Quando eu clico em salvar
        Então os campos da disciplina são atualizados
        E a tela de visualização da disciplina é exibida
