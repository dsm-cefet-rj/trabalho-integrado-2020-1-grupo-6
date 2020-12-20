import React from 'react'
import { render, screen } from '@testing-library/react'
import Atividades from './index'

import { MemoryRouter } from 'react-router-dom'

describe('Atividades Unit', function () {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('props vazio', () => {
        render(<Atividades  />);
        expect(screen.getByText(/Não existem Atividades a serem exibidas./i)).toBeInTheDocument()
    });

    test('Atividades vazia', () => {
        render(<Atividades atividades={[]}  />);
        expect(screen.getByText(/Não existem Atividades a serem exibidas./i)).toBeInTheDocument() 
    });
    
    test('Array de Atividades', () => {
        render(<Atividades atividades={
          [
            {
              "nome": "APS",
              "periodo": "5",
              "horario": "20:00",
              "local": "pavilhao 2",
              "professor": "Maiani",
              "material": "www.google.com.br",
              "status": "Em andamento",
              "idUsuario": 1,
              "id": 1
            },
            {
              "nome": "lista",
              "dataEntrega": "12/02/2013",
              "pontuacaoMax": "10",
              "status": "Aguardando",
              "tipo": "Trabalho",
              "descricao": "lista de exercicio",
              "notaFinal": "8",
              "arquivo": "lista.pdf",
              "idDisciplina": "mNxN2JW",
              "idUsuario": "6knp4_x",
              "id": 2
            },
            {
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
              "id": 3
            }
          ]
        }  />, { wrapper: MemoryRouter });
        expect(screen.getByText(/requisitos/i)).toBeInTheDocument();
    });

});