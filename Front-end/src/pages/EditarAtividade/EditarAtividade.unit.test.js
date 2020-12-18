import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import {useSelector} from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { MemoryRouter, Route } from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import {addProjetoServer, updateProjetoServer} from './ProjetosSlice'
import {EditarAtividade} from './index'; 


// Mocking the redux module
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn( () => jest.fn((param) => param) )
}));

// mocking state
const mockAppState = {
    atividades: {
        status: 'not_loaded',
        error: null,
        atividades: [{id: 1, nome: 'Projeto 1', sigla: 'P1'}],
    }
}





// test('Nome limite inferior válido', () => {throw 'Not implemented yet'});

// test('Nome válido', () => {throw 'Not implemented yet'});

// test('Nome limite superior válido -1', () => {throw 'Not implemented yet'});

// test('Nome limite superior válido', () => {throw 'Not implemented yet'});

// test('Nome limite superior inválido', () => {throw 'Not implemented yet'});

// //####### CAMPO DATA ENTREGA ###################################

// test('Data entrega vazio', () => {throw 'Not implemented yet'});

// test('Data entrega limite inferior válido', () => {throw 'Not implemented yet'});

// test('Data entrega válido', () => {throw 'Not implemented yet'});

// test('Data entrega limite superior válido -1', () => {throw 'Not implemented yet'});

// test('Data entrega limite superior válido', () => {throw 'Not implemented yet'});

// test('Data entrega limite superior inválido', () => {throw 'Not implemented yet'});

// //####### CAMPO PONTUAÇÃO MÁXIMA ###############################

// test('Pontuação máxima vazio', () => {throw 'Not implemented yet'});

// test('Pontuação máxima limite inferior válido', () => {throw 'Not implemented yet'});

// test('Pontuação máxima válido', () => {throw 'Not implemented yet'});

// test('Pontuação máxima limite superior válido -1', () => {throw 'Not implemented yet'});

// test('Pontuação máxima limite superior válido', () => {throw 'Not implemented yet'});

// test('Pontuação máxima limite superior inválido', () => {throw 'Not implemented yet'});

// //####### CAMPO STATUS #########################################

// test('Status vazio', () => {throw 'Not implemented yet'});

// test('Status limite inferior válido', () => {throw 'Not implemented yet'});

// test('Status válido', () => {throw 'Not implemented yet'});

// test('Status limite superior válido -1', () => {throw 'Not implemented yet'});

// test('Status limite superior válido', () => {throw 'Not implemented yet'});

// test('Status limite superior inválido', () => {throw 'Not implemented yet'});

// //####### CAMPO TIPO ###########################################

// test('Campo Tipo vazio', () => {throw 'Not implemented yet'});

// test('Campo Tipo limite inferior válido', () => {throw 'Not implemented yet'});

// test('Campo Tipo válido', () => {throw 'Not implemented yet'});

// test('Campo Tipo limite superior válido -1', () => {throw 'Not implemented yet'});

// test('Campo Tipo limite superior válido', () => {throw 'Not implemented yet'});

// test('Campo Tipo limite superior inválido', () => {throw 'Not implemented yet'});

// //####### CAMPO DESCRIÇÃO ######################################

// test('Campo Descrição vazio', () => {throw 'Not implemented yet'});

// test('Campo Descrição limite inferior válido', () => {throw 'Not implemented yet'});

// test('Campo Descrição válido', () => {throw 'Not implemented yet'});

// test('Campo Descrição limite superior válido -1', () => {throw 'Not implemented yet'});

// test('Campo Descrição limite superior válido', () => {throw 'Not implemented yet'});

// test('Campo Descrição limite superior inválido', () => {throw 'Not implemented yet'});

// //####### CAMPO NOTA FINAL #####################################

// test('Campo Nota Final vazio', () => {throw 'Not implemented yet'});

// test('Campo Nota Final limite inferior válido', () => {throw 'Not implemented yet'});

// test('Campo Nota Final válido', () => {throw 'Not implemented yet'});

// test('Campo Nota Final limite superior válido -1', () => {throw 'Not implemented yet'});

// test('Campo Nota Final limite superior válido', () => {throw 'Not implemented yet'});

// test('Campo Nota Final limite superior inválido', () => {throw 'Not implemented yet'});

// //####### CAMPO ARQUIVO ########################################

// test('Campo Arquivo vazio', () => {throw 'Not implemented yet'});

// test('Campo Arquivo limite inferior válido', () => {throw 'Not implemented yet'});

// test('Campo Arquivo válido', () => {throw 'Not implemented yet'});

// test('Campo Arquivo limite superior válido -1', () => {throw 'Not implemented yet'});

// test('Campo Arquivo limite superior válido', () => {throw 'Not implemented yet'});

// test('Campo Arquivo limite superior inválido', () => {throw 'Not implemented yet'});
