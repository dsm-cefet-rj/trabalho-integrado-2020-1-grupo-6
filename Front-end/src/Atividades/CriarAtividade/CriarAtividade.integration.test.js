import { render, screen, fireEvent } from '@testing-library/react';
import {CriarAtividade, submitCriarAtividade} from './index.js';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { configure } from 'enzyme';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import React from 'react';
import {Atividades} from './index';



describe('Componente de criar atividade', () => {
    let wrapper;
    const mockCriarAtividadefn = jest.fn();

     beforeEach(() => {
       wrapper = shallow(<submitCriarAtividade criarAtividade={mockCriarAtividadefn}/>)
});
test('Criar atividade', async () => {
    const { getByText, getByPlaceholderText, getByDisplayValue } = render(<Atividades />);
  
    // digitar texto nos campos
    getByPlaceholderText('Digite nome da atividade').value = 'P2-Estatistica';
    getByPlaceholderText('Digite data de entrega da atividade').value = '12/01/2021';
    getByPlaceholderText('Digite pontuação máxima da atividade').value = '10';
    getByDisplayValue('Em andamento').value = 'Aguardando';
    getByDisplayValue('Prova').value = 'Prova';
    getByPlaceholderText('Digite descrição da atividade').value = 'Segunda prova';
    getByPlaceholderText('Digite nota final da atividade').value = '';
    getByPlaceholderText('Insira arquivo da atividade').value = 'p2_EST.pdf'
  
    wrapper.find('#btnCriarAtividade').simulate.click(getByText('Criar'));
  
   
    expect(screen.getByText(/P2-Estatistica./i)).toBeInTheDocument();
    expect(screen.getByText(/Segunda prova./i)).toBeInTheDocument();
  });
});