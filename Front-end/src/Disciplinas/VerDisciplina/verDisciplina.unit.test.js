import React              from 'react';
import { VerDisciplina }   from './index';
import { MemoryRouter }   from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('VerDisciplina Unit', function () {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('props vazio', () => {
        render(<VerDisciplina  />);
        expect(screen.getByText(/Não existe Disciplina a ser exibida./i)).toBeInTheDocument();
    });

    test('Disciplina vazia', () => {
        render(<VerDisciplina projetos={[]}  />);
        expect(screen.getByText(/Não existe Disciplina a ser exibida./i)).toBeInTheDocument();
    });

    test('Disciplina correta', () => {
        render(<VerDisciplina Disciplina={{
          "nome": "PSW",
          "periodo": "2°",
          "horario": "20:00",
          "local": "Pavilhão 4",
          "professor": "Pedro",
          "material": "https://google.com",
          "status": "Concluida",
          "idUsuario": 1,
          "id": "7i_Xcbm"
        }}  />, { wrapper: MemoryRouter });

        expect(screen.getByText(/PSW./i)).toBeInTheDocument();
        expect(screen.getByText(/Pavilhão 1./i)).toBeInTheDocument();
    });

});