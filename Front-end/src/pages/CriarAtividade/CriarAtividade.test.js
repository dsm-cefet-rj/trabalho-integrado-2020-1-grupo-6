import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react'
import { mockComponent } from "react-dom/test-utils";
import {useSelector} from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { MemoryRouter, Route } from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import {CriarAtividade, submitCriarAtividade} from './index.js'
import Enzyme from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


describe("<CriarAtividade />", () => {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapper = Enzyme.mount(Enzyme.shallow(<CriarAtividade />).get(0))
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("Nome input", () => {
        it("Deve guardar nome corretamente onChange", () => {
            const nome = wrapper.find("input").at(0);
            nome.instance().value = "Teste";
            nome.simulate("change");
            expect(setState).toHaveBeenCalledWith("Teste");
        });
    });

    describe("dataEntrega input", () => {
        it("Deve guardar dataEntrega corretamente onChange", () => {
            const dataEntrega = wrapper.find("input").at(1);
            dataEntrega.instance().value = "07/01/2021";
            dataEntrega.simulate("change");
            expect(setState).toHaveBeenCalledWith("07/01/2021");
        });
    });

});
const fieldTest = async (nomeParam, dataEntregaParam,  pontuacaoMaxParam, statusAguardandoParam,
    statusConcluidaParam, tipoProvaParam, tipoTrabalhoParam, descricaoParam, notaFinalParam, 
    arquivoParam ,isNomeValido, isDataEntregaValida, isPontuacaoMaxValida, isStatusAguardandoValido, 
    isStatusConcluidaValido, isTipoProvaValido, isTipoTrabalhoValido, isDescricaoValida, 
    isNotaFinalValida, isArquivoValido, msgEsperada, path = null, containerParam = null, historyParam = null) => {
    const history = historyParam ? historyParam : createMemoryHistory();
    const { container } = containerParam ? containerParam : render(<Router history={history}><CriarAtividade/></Router>);

    const nome = container.querySelector("#nome");
    const dataEntrega = container.querySelector("#dataEntregaAtividade");
    const pontuacaoMax = container.querySelector("#pontuacaoMaxAtividade");
    const statusAguardando = container.querySelector("#statusAtividadeAguardando");
    const statusConcluida = container.querySelector("#statusAtividadeConcluida");
    const tipoProva = container.querySelector("#tipoProvaAtividade");
    const tipoTrabalho = container.querySelector("#tipoTrabalhoAtividade");
    const descricao = container.querySelector("#descricaoAtividade");
    const notaFinal = container.querySelector("#notaFinalAtividade");
    const arquivo = container.querySelector("#arquivoAtividade");
    const submitButton = container.querySelector("#btnCriarAtividade");
    fireEvent.input(nome, {target: {value: nomeParam}});
    fireEvent.input(dataEntrega, {target: {value: dataEntregaParam}});
    fireEvent.input(pontuacaoMax, {target: {value: pontuacaoMaxParam}});
    fireEvent.input(statusAguardando, {target: {value: statusAguardandoParam}});
    fireEvent.input(statusConcluida, {target: {value: statusConcluidaParam}});
    fireEvent.input(tipoProva, {target: {value: tipoProvaParam}});
    fireEvent.input(tipoTrabalho, {target: {value: tipoTrabalhoParam}});
    fireEvent.input(descricao, {target: {value: descricaoParam}});
    fireEvent.input(notaFinal, {target: {value: notaFinalParam}});
    fireEvent.input(arquivo, {target: {value: arquivoParam}});

    await act(async () => {
        fireEvent.submit(submitButton);
    });
    
    //não tem msg de erro ainda!!
    if(!isNomeValido){
        expect(container.querySelector("#nome_err_msg").innerHTML).toContain(msgEsperada);
    }
    if(!isDataEntregaValida){
        expect(container.querySelector("#data_err_msg").innerHTML).toContain(msgEsperada);
    }
    if(!isPontuacaoMaxValida){
        expect(container.querySelector("#pontuacao_err_msg").innerHTML).toContain(msgEsperada);
    }
    if(!isStatusAguardandoValido){
        expect(container.querySelector("#statusag_err_msg").innerHTML).toContain(msgEsperada);
    }
    if(!isStatusConcluidaValido){
        expect(container.querySelector("#statuscl_err_msg").innerHTML).toContain(msgEsperada);
    }
    if(!isTipoProvaValido){
        expect(container.querySelector("#prova_err_msg").innerHTML).toContain(msgEsperada);
    }
    if(!isTipoTrabalhoValido){
        expect(container.querySelector("#trab_err_msg").innerHTML).toContain(msgEsperada);
    }
    if(!isDescricaoValida){
        expect(container.querySelector("#descricao_err_msg").innerHTML).toContain(msgEsperada);
    }
    if(!isNotaFinalValida){
        expect(container.querySelector("#nota_err_msg").innerHTML).toContain(msgEsperada);
    }
    if(!isArquivoValido){
        expect(container.querySelector("#arquivo_err_msg").innerHTML).toContain(msgEsperada);
    }
    if(isNomeValido && isDataEntregaValida && isPontuacaoMaxValida && isStatusAguardandoValido && 
        isStatusConcluidaValido && isTipoProvaValido && isTipoTrabalhoValido && isDescricaoValida && 
        isNotaFinalValida && isArquivoValido){
        expect(history.location.pathname).toBe(path);
    }
}

describe('Componente de criar atividade', () => {
    let wrapper;
    const mockCriarAtividadefn = jest.fn();
   
     beforeEach(() => {
       wrapper = shallow(<submitCriarAtividade criarAtividade={mockCriarAtividadefn}/>)
})

    describe('Quando eu clico em criar atividade', () => {
    it('deve chamar a função criarAtividade', () => {
     wrapper.find('#btnCriarAtividade').simulate(
       'submit', 
       {preventDefault() {}}
     )
     expect(mockCriarAtividadefn.mock.calls.length).toBe(1)
    })
  })

//####### CAMPO NOME ###########################################


test('renders submit button with custom text', () => {
    const wrapper = mockComponent(<submitCriarAtividade>Criar</submitCriarAtividade>);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.prop('type')).toEqual('submit');
    expect(button.text()).toEqual('Criar');
  });

test('Nome vazio', async () => {
    await fieldTest('N', 'abc', true, true, null, '/CriarAtividade');
    expect(CriarAtividade).toHaveBeenCalledTimes(1);
});

test('Nome limite inferior válido', () => {throw 'Not implemented yet'});

test('Nome válido', () => {
    const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'test' }));
    const wrapper = shallow(<MyForm form="test" handleSubmit={handleSubmit}   />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'some text' } });});

test('Nome limite superior válido -1', () => {throw 'Not implemented yet'});

test('Nome limite superior válido', () => {throw 'Not implemented yet'});

test('Nome limite superior inválido', () => {throw 'Not implemented yet'});

//####### CAMPO DATA ENTREGA ###################################

test('Data entrega vazio', () => {throw 'Not implemented yet'});

test('Data entrega limite inferior válido', () => {throw 'Not implemented yet'});

test('Data entrega válido', () => {throw 'Not implemented yet'});

test('Data entrega limite superior válido -1', () => {throw 'Not implemented yet'});

test('Data entrega limite superior válido', () => {throw 'Not implemented yet'});

test('Data entrega limite superior inválido', () => {throw 'Not implemented yet'});

//####### CAMPO PONTUAÇÃO MÁXIMA ###############################

test('Pontuação máxima vazio', () => {throw 'Not implemented yet'});

test('Pontuação máxima limite inferior válido', () => {throw 'Not implemented yet'});

test('Pontuação máxima válido', () => {throw 'Not implemented yet'});

test('Pontuação máxima limite superior válido -1', () => {throw 'Not implemented yet'});

test('Pontuação máxima limite superior válido', () => {throw 'Not implemented yet'});

test('Pontuação máxima limite superior inválido', () => {throw 'Not implemented yet'});

//####### CAMPO STATUS #########################################

test('Status vazio', () => {throw 'Not implemented yet'});

test('Status limite inferior válido', () => {throw 'Not implemented yet'});

test('Status válido', () => {throw 'Not implemented yet'});

test('Status limite superior válido -1', () => {throw 'Not implemented yet'});

test('Status limite superior válido', () => {throw 'Not implemented yet'});

test('Status limite superior inválido', () => {throw 'Not implemented yet'});

//####### CAMPO TIPO ###########################################

test('Campo Tiro vazio', () => {throw 'Not implemented yet'});

test('Campo Tiro limite inferior válido', () => {throw 'Not implemented yet'});

test('Campo Tiro válido', () => {throw 'Not implemented yet'});

test('Campo Tiro limite superior válido -1', () => {throw 'Not implemented yet'});

test('Campo Tiro limite superior válido', () => {throw 'Not implemented yet'});

test('Campo Tiro limite superior inválido', () => {throw 'Not implemented yet'});

//####### CAMPO DESCRIÇÃO ######################################

test('Campo Descrição vazio', () => {throw 'Not implemented yet'});

test('Campo Descrição limite inferior válido', () => {throw 'Not implemented yet'});

test('Campo Descrição válido', () => {throw 'Not implemented yet'});

test('Campo Descrição limite superior válido -1', () => {throw 'Not implemented yet'});

test('Campo Descrição limite superior válido', () => {throw 'Not implemented yet'});

test('Campo Descrição limite superior inválido', () => {throw 'Not implemented yet'});

//####### CAMPO NOTA FINAL #####################################

test('Campo Nota Final vazio', () => {throw 'Not implemented yet'});

test('Campo Nota Final limite inferior válido', () => {throw 'Not implemented yet'});

test('Campo Nota Final válido', () => {throw 'Not implemented yet'});

test('Campo Nota Final limite superior válido -1', () => {throw 'Not implemented yet'});

test('Campo Nota Final limite superior válido', () => {throw 'Not implemented yet'});

test('Campo Nota Final limite superior inválido', () => {throw 'Not implemented yet'});

//####### CAMPO ARQUIVO ########################################

test('Campo Arquivo vazio', () => {throw 'Not implemented yet'});

test('Campo Arquivo limite inferior válido', () => {throw 'Not implemented yet'});

test('Campo Arquivo válido', () => {throw 'Not implemented yet'});

test('Campo Arquivo limite superior válido -1', () => {throw 'Not implemented yet'});

test('Campo Arquivo limite superior válido', () => {throw 'Not implemented yet'});

test('Campo Arquivo limite superior inválido', () => {throw 'Not implemented yet'});
