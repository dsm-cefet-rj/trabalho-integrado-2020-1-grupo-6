# language: pt
Funcionalidade: Listagem de Atividades

        Apresenta a listagem das atividades que o usuário possui nas disciplinas as quais ele está inscrito, 
        com o nome da atividade-disciplina, data de entrega e status. Possibilita o acesso a ações de busca, 
        visualização, inclusão, edição e exclusão de atividades.

        Contexto:
            Dado que temos atividades cadastradas
                 | id | Nome                | Data de Entrega | Pontuação Máxima  | Status      | Tipo      | Descrição          | Nota Final     | Arquivo
                 | 1  | ProvaP1             | 15/11/2020      | 10                | Aguardando  | Prova     | JavaScript e HTML  | 8              | prova_p1.pdf
                 | 2  | TrabalhoSoftware    | 03/12/2020      | 5                 | Concluida   | Trabalho  | Método ágil        | 3              | agil.pdf
                 | 3  | ProvaP2             | 13/12/2020      | 10                | Aguardando  | Prova     | React e Node       | 10             | prova_p2.pdf
        
        Cenário: Exibir listagem de atividades
            Quando clico em Minhas atividades na Home 
            Então a lista de todas as atividades são exibidas

        Cenário: Buscar de atividade
            Quando digito o nome da atividade que desejo visualizar
            Então é exibida na tela de listagem a disciplina buscada
                E apenas uma atividade encontrada está nela
        
        Cenário: Acessar atividade
            Dado que é exibida a tela de listagem de atividades
            Quando clico na atividade na listagem de atividades
            Então é exibida a tela de visualização da atividade com seus detalhes.
        
        Cenário: Criar atividade
            Dado que eu esteja na página de preenchimento dos dados da ativida
            Quando eu preencho todos os dados referentes à atividade 
                E clico em criar
            Então é exibida a tela com as informações criadas da atividade
        
        Cenário: Editar atividade
            Dado que é exibida a página de edição da atividade
            Quando eu edito todos os dados referentes à atividade 
                E clico em salvar
            Então a tela de edição da atividade é apresentada com suas informações
        
        Cenário: Excluir atividade
            Dado que é exibida a tela de visualização da atividade
            Quando clico no ícone de excluir atividade
            Então é exibida a tela de listagem das disciplinas 
                E será possível as informações das disciplinas
                E as ausência da atividade excluída


