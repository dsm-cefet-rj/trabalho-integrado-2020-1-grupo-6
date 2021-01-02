import React              from 'react';
import { VerAtividade }   from './index';
import { MemoryRouter }   from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('VerAtividade Unit', function () {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('props vazio', () => {
        render(<VerAtividade  />);
        expect(screen.getByText(/Não existe atividade a ser exibida./i)).toBeInTheDocument();
    });

    test('atividade vazia', () => {
        render(<VerAtividade projetos={[]}  />);
        expect(screen.getByText(/Não existe atividade a ser exibida./i)).toBeInTheDocument();
    });

    test('Atividade correta', () => {
        render(<VerAtividade atividade={{
          "nome": "prova1",
          "dataEntrega": "02/02/2020",
          "pontuacaoMax": "10",
          "status": "Concluida",
          "tipo": "Prova",
          "descricao": "primeira prova",
          "notaFinal": "10",
          "arquivo": "prova1.pdf",
          "idDisciplina": "mNxN2JW",
          "idUsuario": "6knp4_x",
          "id": 3,
        }}  />, { wrapper: MemoryRouter });

        expect(screen.getByText(/prova1./i)).toBeInTheDocument();
        expect(screen.getByText(/primeira prova./i)).toBeInTheDocument();
    });

});