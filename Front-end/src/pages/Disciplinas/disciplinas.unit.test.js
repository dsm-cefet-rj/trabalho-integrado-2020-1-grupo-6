import React from 'react'
import { render, screen } from '@testing-library/react'
import Disciplinas from './index'

import { MemoryRouter } from 'react-router-dom'

describe('Disciplinas Unit', function () {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('props vazio', () => {
        render(<Disciplinas  />);
        expect(screen.getByText(/Não existem disciplinas a serem exibidas./i)).toBeInTheDocument()
    });

    test('Disciplinas vazia', () => {
        render(<Disciplinas disciplinas={[]}  />);
        expect(screen.getByText(/Não existem disciplinas a serem exibidas./i)).toBeInTheDocument() 
    });
    
    test('Array de disciplinas', () => {
        render(<Disciplinas disciplinas={
          [
            {
              "nome": "PSW",
              "periodo": "2°",
              "horario": "20:00",
              "local": "Pavilhão 4",
              "professor": "Pedro",
              "material": "https://google.com",
              "status": "Concluida",
              "idUsuario": 1,
              "id": "7i_Xcbm"
            },
            {
              "nome": "matematica",
              "periodo": "2",
              "horario": "18",
              "local": "pavilhao",
              "professor": "joao",
              "material": "#",
              "status": "Em andamento",
              "idUsuario": "6knp4_x",
              "id": "mNxN2JW"
            },
            {
              "nome": "grafos",
              "periodo": "6",
              "horario": "13",
              "local": "sala 2",
              "professor": "maria",
              "material": "#",
              "status": "Em andamento",
              "idUsuario": "6knp4_x",
              "id": "Trb_H1Z"
            },
            {
              "nome": "requisitos",
              "periodo": "2",
              "horario": "17",
              "local": "sala 4",
              "professor": "carmem",
              "material": "#",
              "status": "Em andamento",
              "idUsuario": "6knp4_x",
              "id": "MAFFmSB"
            }
          ]
        }  />, { wrapper: MemoryRouter });
        expect(screen.getByText(/requisitos/i)).toBeInTheDocument();
    });

});