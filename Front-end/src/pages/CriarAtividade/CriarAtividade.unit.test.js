import { render, screen, fireEvent } from '@testing-library/react';
import {CriarAtividade, submitCriarAtividade} from './index.js';
import { MemoryRouter, Route } from 'react-router-dom';
import { mockComponent } from "react-dom/test-utils";
import Adapter from "enzyme-adapter-react-16";
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { configure } from "enzyme";
import Enzyme from "enzyme";
import React from 'react';


const create = require ('../../../../Back-end/src/controllers/atividadesController')
const routes = require ('../../../../Back-end/src/routes/index')

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

    describe("Pontuacao maxima input", () => {
        it("Deve guardar pontuacao maxima corretamente onChange", () => {
            const nome = wrapper.find("input").at(2);
            pontuacaoMax.instance().value = "10";
            pontuacaoMax.simulate("change");
            expect(setState).toHaveBeenCalledWith("10");
        });
    });

    describe("statusAtividadeAguardando option", () => {
        it("Deve guardar status em andamento corretamente onChange", () => {
            const statusAguardando = wrapper.find("option").at(3).at(0);
            statusAguardando.instance().value = "Em andamento";
            statusAguardando.simulate("change");
            expect(setState).toHaveBeenCalledWith("Em andamento");
        });
    });

    describe("statusAtividadeConcluida option", () => {
        it("Deve guardar status concluido onChange", () => {
            const statusConcluida = wrapper.find("option").at(3).at(1);
            statusConcluida.instance().value = "Concluida";
            statusConcluida.simulate("change");
            expect(setState).toHaveBeenCalledWith("Concluida");
        });
    });

    
    describe("tipoProvaAtividade option", () => {
        it("Deve guardar tipo da atividade como prova onChange", () => {
            const tipoProva = wrapper.find("option").at(4).at(0);
            tipoProva.instance().value = "Prova";
            tipoProva.simulate("change");
            expect(setState).toHaveBeenCalledWith("Prova");
        });
    });

    describe("tipoTrabalhoAtividade option", () => {
        it("Deve guardar tipo da atividade como trabalho onChange", () => {
            const tipoProva = wrapper.find("option").at(4).at(1);
            tipoProva.instance().value = "Trabalho";
            tipoProva.simulate("change");
            expect(setState).toHaveBeenCalledWith("Trabalho");
        });
    });

    describe("descricaoAtividade input", () => {
        it("Deve guardar descricao da atividade corretamente onChange", () => {
            const descricaoAtiv = wrapper.find("input").at(5);
            descricaoAtiv.instance().value = "descricao";
            descricaoAtiv.simulate("change");
            expect(setState).toHaveBeenCalledWith("descricao");
        });
    });

    describe("notaFinalAtividade input", () => {
        it("Deve guardar nota final corretamente onChange", () => {
            const notaFinal = wrapper.find("input").at(6);
            notaFinal.instance().value = "5";
            notaFinal.simulate("change");
            expect(setState).toHaveBeenCalledWith("5");
        });
    });

    describe("arquivoAtividade input", () => {
        it("Deve guardar arquivo corretamente onChange", () => {
            const arquivo = wrapper.find("input").at(7);
            arquivo.instance().value = "lista 1";
            arquivo.simulate("change");
            expect(setState).toHaveBeenCalledWith("lista 1");
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
  });

  test('renderiza submit button com texto correto', () => {
    const wrapper = mockComponent(<submitCriarAtividade>Criar</submitCriarAtividade>);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.prop('type')).toEqual('submit');
    expect(button.text()).toEqual('Criar');
  });

//####### CAMPO NOME ###########################################


test('Nome vazio', async () => {
    await fieldTest('', 'abc', false, true, "O campo é obrigatório.");
});

test('Nome limite inferior válido', async () => {
    await fieldTest('N', 'abc', true, true, null, '/CriarAtividade');
        expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Nome válido', async () => {
    await fieldTest('Nome', 'abc', true, true, null, '/CriarAtividade');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Nome limite superior válido -1', async () => {
    await fieldTest('01234567890123456789012345678', 'abc', true, true, null, '/projetos');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Nome limite superior válido', async () => {
    await fieldTest('012345678901234567890123456789', 'abc', true, true, null, '/projetos');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Nome limite superior inválido', async () => {
    await fieldTest('0123456789012345678901234567890', 'abc', false, true, 'O campo deve ter no máximo 30 caracteres.');
    expect(routes.post).toHaveBeenCalledTimes(0);
});

// //####### CAMPO DATA ENTREGA ###################################

test('Data entrega vazio', async () => {
    await fieldTest('', '123', false, true, "O campo é obrigatório.");
});

test('Data entrega limite inferior válido', async () => {
    await fieldTest('21/12/2020', '123', true, true, null, '/CriarAtividade');
        expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Data entrega válido', async () => {
    await fieldTest('21/12/2020', '123', true, true, null, '/CriarAtividade');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Data entrega limite superior válido -1', async () => {
    await fieldTest('021/12/20', '123', true, true, null, '/CriarAtividade');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Data entrega limite superior válido', async () => {
    await fieldTest('21/12/2020', '123', true, true, null, '/CriarAtividade');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Data entrega limite superior inválido', async () => {
    await fieldTest('12/12/20021', 'abc', false, true, 'O campo deve ter no máximo 10 caracteres.');
    expect(routes.post).toHaveBeenCalledTimes(0);
});

//####### CAMPO PONTUAÇÃO MÁXIMA ###############################

test('Pontuação máxima vazio', async () => {
    await fieldTest('', '123', false, true, "O campo é obrigatório.");
});

test('Pontuação máxima limite inferior válido', async () => {
    await fieldTest('0,1', '123', true, true, null, '/CriarAtividade');
        expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Pontuação máxima válido', async () => {
    await fieldTest('5,0', '123', true, true, null, '/CriarAtividade');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Pontuação máxima limite superior válido -1', async () => {
    await fieldTest('9,75', '123', true, true, null, '/CriarAtividade');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Pontuação máxima limite superior válido', async () => {
    await fieldTest('10,0', '123', true, true, null, '/CriarAtividade');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Pontuação máxima limite superior inválido', async () => {
    await fieldTest('10,00', 'abc', false, true, 'O campo deve ter no máximo 4 caracteres.');
    expect(routes.post).toHaveBeenCalledTimes(0);
});
//####### CAMPO STATUS #########################################

test('Status vazio', async () => {
        await fieldTest('', 'aguardando', false, true, "O campo é obrigatório.");
});

test('Status válido', async () => {
await fieldTest('aguardando', 'aguardando', true, true, null, '/CriarAtividade');
expect(routes.post).toHaveBeenCalledTimes(1);
});


//####### CAMPO TIPO ###########################################

test('tipo vazio', async () => {
    await fieldTest('', 'prova', false, true, "O campo é obrigatório.");
});

test('tipo válido', async () => {
await fieldTest('prova', 'prova', true, true, null, '/CriarAtividade');
expect(routes.post).toHaveBeenCalledTimes(1);
});

//####### CAMPO DESCRIÇÃO ######################################

test('NoDescriçãome vazio', async () => {
    await fieldTest('', 'abc', false, true, "O campo é obrigatório.");
});

test('Descrição limite inferior válido', async () => {
    await fieldTest('N', 'abc', true, true, null, '/CriarAtividade');
        expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Descrição válido', async () => {
    await fieldTest('descricao', 'abc', true, true, null, '/CriarAtividade');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Descrição limite superior válido -1', async () => {
    await fieldTest('0123456gs251   872eyte67et2367te2g19h82yd082ft4tr83dghwqjoiogfy013892re1gwp´[~[4
        fwfép´wa[      grçh[hletlaça;[phk-hékga[q-hoqhjtkgq
            ae´[]]]    ]]]7890123    grçhq-hoqhjtkgq
                                    ae´[]]]    ]]]7890123456789012345678900123456gs251   872eyte67et2367te2g19h82yd082ft4tr83dghwqjoiogfy013892re1gwp´[~[4
                                        fwfép´wa[      grçh[hletlaça;[phk-hékga[q-hoqhjtkgq
                                            ae´[]]]]]', 'abc', true, true, null, '/projetos');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Descrição limite superior válido', async () => {
    await fieldTest('0123456gs251   872eyte67et2367te2g19h82yd082ft4tr83dghwqjoiogfy013892re1gwp´[~[4
        fwfép´wa[      grçh[hletlaça;[phk-hékga[q-hoqhjtkgq
            ae´[]]]    ]]]7890123    grçhq-hoqhjtkgq
                                    ae´[]]]    ]]]7890123456789012345678900123456gs251   872eyte67et2367te2g19h82yd082ft4tr83dghwqjoiogfy013892re1gwp´[~[4
                                        fwfép´wa[      grçh[hletlaça;[phk-hékga[q-hoqhjtkgq
                                            ae´[]]]]]0', 'abc', true, true, null, '/projetos');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Descrição limite superior inválido', async () => {
    await fieldTest('0123456gs251   872eyte67et2367te2g19h82yd082ft4tr83dghwqjoiogfy013892re1gwp´[~[4
    fwfép´wa[      grçh[hletlaça;[phk-hékga[q-hoqhjtkgq
        ae´[]]]    ]]]7890123    grçh[hletlaça;[phk-hékga[q-hoqhjtkgq
                                ae´[]]]    ]]]7890123456789012345678900123456gs251   872eyte67et2367te2g19h82yd082ft4tr83dghwqjoiogfy013892re1gwp´[~[4
                                    fwfép´wa[      grçh[hletlaça;[phk-hékga[q-hoqhjtkgq
                                        ae´[]]] ]]', 'abc', false, true, 'O campo deve ter no máximo 500 caracteres.');
    expect(routes.post).toHaveBeenCalledTimes(0);
});

//####### CAMPO NOTA FINAL #####################################

test('Nota Final vazio', async () => {
    await fieldTest('', '123', false, true, "O campo é obrigatório.");
});

test('Nota Final limite inferior válido', async () => {
    await fieldTest('0,1', '123', true, true, null, '/CriarAtividade');
        expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Nota Final válido', async () => {
    await fieldTest('5,0', '123', true, true, null, '/CriarAtividade');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Nota Final limite superior válido -1', async () => {
    await fieldTest('9,75', '123', true, true, null, '/CriarAtividade');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Nota Final limite superior válido', async () => {
    await fieldTest('10,0', '123', true, true, null, '/CriarAtividade');
    expect(routes.post).toHaveBeenCalledTimes(1);
});

test('Nota Final limite superior inválido', async () => {
    await fieldTest('10,00', 'abc', false, true, 'O campo deve ter no máximo 4 caracteres.');
    expect(routes.post).toHaveBeenCalledTimes(0);
});
//####### CAMPO ARQUIVO ########################################

//não foi implementado pela equipe de desenvolvimento ainda