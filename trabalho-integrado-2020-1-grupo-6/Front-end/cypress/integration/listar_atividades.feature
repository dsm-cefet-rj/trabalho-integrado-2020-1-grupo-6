# language: pt
Funcionalidade: Listagem de Atividades

        Apresenta a listagem das atividades que o usuário possui nas disciplinas as quais ele está inscrito, 
        com o nome da atividade-disciplina, data de entrega e status. 

        Cenário: Exibir a listagem de atividade
            Dado que temos atividades cadastradas na respectiva disciplina
            Quando eu clico em Minhas Atividades na Home
            Então a listagem de atividades é exibida

