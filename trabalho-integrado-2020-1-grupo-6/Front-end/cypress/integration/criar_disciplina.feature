# language: pt
Funcionalidade: Cria uma nova disciplina

  Exibe o formulário para criação de disciplina
  juntamente com o botão de criar

  Cenário: Criar Disciplina
    Dado que o formulário seja preenchido corretamente:
      | id                          | valor                                                                   |
      | nomeDisciplina              | Evolução Estelar                                                        |
      | periodoDisciplina           | 2020.2                                                                  |
      | horarioDisciplina           | 18:20                                                                   |
      | localDisciplina             | Pavilhão 7                                                              |
      | nomeProfessorDisciplina     | Carl Sagan                                                              |
      | materialDisciplina          | https://www.indeed.com/career-advice/careers/what-does-an-astronomer-do |
      | statusDisciplinaEmAndamento | true                                                                    |
      | statusDisciplinaConcluida   | false                                                                   |
    Quando eu clico em criar
    Então a pagina de listagem de disciplina é exbida
    E a disciplina criada está presente
