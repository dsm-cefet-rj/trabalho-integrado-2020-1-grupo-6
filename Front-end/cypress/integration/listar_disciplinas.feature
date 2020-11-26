# language: pt
Funcionalidade: Listagem de Disciplinas

        Apresenta a listagem de todas as disciplinas em que o usuário está inscrito, 
        juntamente com sua duração e status. Possibilita o acesso a ações de busca, 
        visualização, inclusão, edição e exclusão de disciplinas.

        Contexto:
            Dado que temos disciplinas cadastradas
                | id | Nome         | Periodo | Horario       | Local   | Professor | Material | Status     |
                | 1  | Disciplina 1 | 1°      | 18h20 - 21h50 | Local 1 | Nome X    | Moodle   | Aguardando |
                | 2  | Disciplina 2 | 2°      | 18h20 - 21h50 | Local 2 | Nome Y    | Site     | Concluída  |
                | 3  | Disciplina 3 | 3°      | 18h20 - 21h50 | Local 3 | Nome Z    | Github   | Aguardando |
        
        Cenário: Exibir listagem de disciplinas do usuário
            Quando clico em Minhas disciplinas na Home 
            Então as disciplinas são exibidas

        Cenário: Buscar disciplina
            Quando digito o nome da disciplina que desejo visualizar
            Então é exibida na tela de listagem de disciplinas 
                E apenas a disciplina encontrada está nela
        
        Cenário: Acessar disciplina
            Dado que é exibida a tela de listagem de disciplinas
            Quando clico na disciplina na listagem de disciplinas
            Então é exibida a tela de visualização da disciplina com seus detalhes e atividades associadas
        
        Cenário: Criar disciplina
            Quando clico no ícone de criar disciplina
            Então a tela de cadastramento de nova disciplina é exibida
        
        Cenário: Editar disciplina
            Dado que é exibida a tela de visualização da disciplina
            Quando clico no ícone de editar disciplina
            Então a tela de edição de disciplina é apresentada
                E os dados cadastrados estão preenchidos
        
        Cenário: Excluir disciplina
            Dado que é exibida a tela de visualização da disciplina
            Quando clico no ícone de excluir disciplina
            Então é exibida a tela de listagem das disciplinas 
                E a disciplina excluída não está nela

