import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import Formatividade from './EditarAtividade'
import {useSelector} from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { MemoryRouter, Route } from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import { EditarAtividade } from '.';
import {addatividadeServer, updateatividadeServer} from './AtividadeSlice'


// Mocking redux module
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn( () => jest.fn((param) => param) )
}));


// Mocking the state
const mockAppState = {
    projetos: {
        status: 'not_loaded',
        error: null,
        projetos: [{id: 1, nome: 'Projeto 1', sigla: 'P1'}],
    }
}


describe("EditarAtividade unit", () => {

    beforeEach(() => {
        useSelector.mockImplementation(callback => {
          return callback(mockAppState);
        });
    });
    
    afterEach(() => {
        useSelector.mockClear();
        addProjetoServer.mockClear();
    });


    test('Carregar novo formulario', () => {
        render(<EditarAtividade/>, { wrapper: MemoryRouter });
        expect(screen.getByText(/Novo Projeto/i)).toBeInTheDocument()
    });

    
    test('Carregar form update', () => {
        let atividadeId = 1;
        render(
            <MemoryRouter initialEntries={[`/atividades/${atividadeId}`]}>
                <Route path="/atividades/:id">
                    <EditarAtividade/>
                </Route>
            </MemoryRouter>
             );
        expect(screen.getByText(/Alteração de atividade/i)).toBeInTheDocument()
    });

    test('Update válido', async () => {
        let atividadeId = 1;
        let {container} = render(
            <MemoryRouter initialEntries={[`/EditarAtividades/${atividadeId}`]}>
                <Route path="/atividades/:id">
                    <EditarAtividade/>
                </Route>
            </MemoryRouter>
        );

        expect(screen.getByText(/Alteração de atividade/i)).toBeInTheDocument();

        const nome = container.querySelector("#nome");
        const sigla = container.querySelector("#sigla");
        const submitButton = container.querySelector("#Salvar");
        fireEvent.input(nome, {target: {value: 'Nome'}});
        fireEvent.input(sigla, {target: {value: 'Sig'}});

        await act(async () => {
            fireEvent.submit(submitButton);
        });
        
        expect(updateatividadeServer).toHaveBeenCalledTimes(1);
        
    });

    test('Carregar id que não existe', () => {
        let atividadeId = 2;
        render(
            <MemoryRouter initialEntries={[`/atividades/${atividadeId}`]}>
                <Route path="/atividades/:id">
                    <EditarAtividade/>
                </Route>
            </MemoryRouter>
             );
        expect(screen.getByText(/Novo atividade/i)).toBeInTheDocument();
    });

    test('Nome Vazio', async () => {
        fieldTest('', 'abc', false, true, "O campo é obrigatório.")
    });

    test('Nome limite inferior válido', async () => {
        await fieldTest('N', 'abc', true, true, null, '/atividades');
        expect(addatividadeServer).toHaveBeenCalledTimes(1);
    });

    test('Nome válido', async () => {
        await fieldTest('Nome', 'abc', true, true, null, '/atividades');
        expect(addatividadeServer).toHaveBeenCalledTimes(1);
    });

    test('Nome limite superior válido -1', async () => {
        await fieldTest('01234567890123456789012345678', 'abc', true, true, null, '/atividades');
        expect(addatividadeServer).toHaveBeenCalledTimes(1);
    });

    test('Nome limite superior válido', async () => {
        await fieldTest('012345678901234567890123456789', 'abc', true, true, null, '/atividades');
        expect(addatividadeServer).toHaveBeenCalledTimes(1);
    });

    test('Nome limite superior inválido', async () => {
        await fieldTest('0123456789012345678901234567890', 'abc', false, true, 'O campo deve ter no máximo 30 caracteres.');
        expect(addatividadeServer).toHaveBeenCalledTimes(0);
    });

    test('Nome Vazio', async () => {
        fieldTest('atividade', '', true, false, "O campo é obrigatório.")
    });

    test('Nome limite inferior válido', async () => {
        await fieldTest('atividade', 'P', true, true, null, '/atividades');
        expect(addatividadeServer).toHaveBeenCalledTimes(1);
    });

    test('Nome válido', async () => {
        await fieldTest('atividade', 'PRO', true, true, null, '/atividades');
        expect(addatividadeServer).toHaveBeenCalledTimes(1);
    });

    test('Nome limite superior válido -1', async () => {
        await fieldTest('atividade', '1234', true, true, null, '/atividades');
        expect(addatividadeServer).toHaveBeenCalledTimes(1);
    });

    test('Nome limite superior válido', async () => {
        await fieldTest('atividade', '12345', true, true, null, '/atividades');
        expect(addatividadeServer).toHaveBeenCalledTimes(1);
    });

    test('Nome limite superior inválido', async () => {
        await fieldTest('atividade', '123456', true, false, 'O campo deve ter no máximo 5 caracteres.');
        expect(addatividadeServer).toHaveBeenCalledTimes(0);
    });

    //##########################################################


});