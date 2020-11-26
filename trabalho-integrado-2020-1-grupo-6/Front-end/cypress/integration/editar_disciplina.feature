# language: pt
Funcionalidade: Edita uma disciplina

    Exibe o formulário para edição de disciplina
    juntamente com o botão de salvar

    Cenário: Editar disciplina cadastradas
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
        Quando eu clico em salvar
        Então a tela de visualização da disciplina é exibida
