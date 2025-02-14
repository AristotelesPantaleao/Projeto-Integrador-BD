// Fornece acesso ao elemento do formulario.
const formulario = document.getElementById('formulario');
// Recuperam dados do localStorage para codigoDaSala, localDaSala, capacidadeDeAluno, flexDeComputadores, flexDeProjetor, flexDeLousaInterativa, flexDeMaterial, flexRadioSim, flexRadioNao e opcoes e convertem em objetos javascript, se os dados não existirem no localStorage, arrays vazios serão usados como valores padrão.
const codigoDaSala = JSON.parse(localStorage.getItem('codigoDaSala') || '[]');
const localDaSala = JSON.parse(localStorage.getItem('localDaSala') || '[]');
const capacidadeDeAluno = JSON.parse(localStorage.getItem('capacidadeDeAluno') || '[]');
const flexDeComputadores = JSON.parse(localStorage.getItem('flexDeComputadores') || '[]');
const flexDeProjetor = JSON.parse(localStorage.getItem('flexDeProjetor') || '[]');
const flexDeLousaInterativa = JSON.parse(localStorage.getItem('flexDeLousaInterativa') || '[]');
const flexDeMaterial = JSON.parse(localStorage.getItem('flexDeMaterial') || '[]');
const flexDeRadioSim = JSON.parse(localStorage.getItem('flexDeRadioSim') || '[]');
const flexDeRadioNao = JSON.parse(localStorage.getItem('flexDeRadioNao') || '[]');
const opcoes = JSON.parse(localStorage.getItem('opcoes') || '[]');
// cria variaveis condicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeBreak e atribui o valor false a elas
let condicaoCodigo = false, condicaoLocal = false, condicaoCapacidade = false, condicaoCoffeeBreak = false;
// Função cadastrarSala
function cadastrarSala() {
    // pega o valor do elemento que possui id codigoSala e atribui a constante codigoSala
    const codigoSala = document.getElementById('codigoSala').value;
    // Verifica se codigoSala esta incluso no array codigoDaSala
    if (codigoDaSala.includes(codigoSala)) {
        // Se a condição anterior for verdadeira entao condicaoCodigo continua false
        condicaoCodigo = false;
        // "Limpa" o valor do elemento de id codigoSala
        document.getElementById('codigoSala').value = '';
        // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui condicaoCodigo vira true
        condicaoCodigo = true;
        // "Limpa" o valor do elemento de id codigoSala
        document.getElementById('codigoSala').value = '';
    }
    // Fornece acesso ao elemento do codigoDaSalaError
    const codigoDaSalaError = document.getElementById('codigoDaSalaError');
    // Verifica se a codigoDaSala foi cadastrado e retorna uma mensagem de erro durante 3 segundos
    if (JSON.parse(localStorage.getItem('codigoDaSala')) !== null && condicaoCodigo === false) {
        codigoDaSalaError.textContent = 'Código já cadastrado'

        setTimeout(() => {
            codigoDaSalaError.textContent = '';
        }, 3000);
    } else {
        codigoDaSalaError.textContent = '';
    }
    // pega o valor do elemento que possui id localSala e atribui a constante localSala
    const localSala = document.getElementById('localSala').value;
    // Verifica se localSala é estritamente igual a vazio
    if (localSala === '') {
        // Se a condição anterior for verdadeira entao condicaoLocal continua false
        condicaoLocal = false;
        // "Limpa" o valor do elemento de id localSala
        document.getElementById('localSala').value = '';
        // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui condicaoLocal vira true
        condicaoLocal = true
        // "Limpa" o valor do elemento de id localSala
        document.getElementById('localSala').value = '';
    }
    // pega o valor do elemento que possui id capacidadeAluno e atribui a constante capacidadeAluno
    const capacidadeAluno = document.getElementById('capacidadeAluno').value;
    // Verifica se capacidadeAluno é menor ou igual a 0
    if (capacidadeAluno <= 0) {
        // Se a condição anterior for verdadeira entao condicaoCapacidade continua false
        condicaoCapacidade = false;
        // "Limpa" o valor do elemento de id capacidadeAluno
        document.getElementById('capacidadeAluno').value = '';
        // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui condicaoCapcidade vira true
        condicaoCapacidade = true
        // "Limpa" o valor do elemento de id capacidadeAluno
        document.getElementById('capacidadeAluno').value = '';
    }
    // Fornece acesso ao elemento de id flexRadioSim e flexRadioNao.
    const cofeBreakSim = document.querySelector('#flexRadioSim');
    const cofeBreakNao = document.querySelector('#flexRadioNao');
    // Verifica se a opção cofeBreakSim for marcada e cofeBreakNao está desmarcada
    if (cofeBreakSim.checked && !cofeBreakNao.checked) {
        // Se a condição anterior for verdadeira condicaoCoffeeBreak vira true
        condicaoCoffeeBreak = true
        // Atribui Opção marcada a variavel mensagem
        let mensagem = 'Opção marcada';
        // Verifica se condicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeeBreak são verdadeiros
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            // Se a condição anterior for verdadeira adiciona mensagem ao array flexDeRadioSim e adiciona Opção desmarcada ao array flexDeRadioNao
            flexDeRadioSim.push(mensagem);
            flexDeRadioNao.push('Opção desmarcada');
        }
    }
    // Verifica se a opção cofeBreakNao está marcada
    if (cofeBreakNao.checked) {
        // Se a condiçao anterior for verdadeira condicaoCoffeBreak vira true
        condicaoCoffeeBreak = true
        // Atribui Opção marcada a variavel mensagem
        let mensagem = 'Opção marcada';
        // Verifica se condicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeeBreak são verdadeiros
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            // Se a condição anterior for verdadeira adiciona mensagem ao array flexDeRadioNao e adiciona Opção desmarcada ao array flexDeRadioSim
            flexDeRadioNao.push(mensagem);
            flexDeRadioSim.push('Opção desmarcada');
        }
    }
    // Desmarca as opções cofeBreakSim e cofeBreakNao
    cofeBreakSim.checked = false;
    cofeBreakNao.checked = false;
    // Fornece acesso ao elemento de id flexComputadores.
    const pc = document.querySelector('#flexComputadores');
    // Verifica se a opção pc for marcada
    if (pc.checked) {
        // Se a condição anterior for verdadeiro atribui Opção marcada a variavel mensagem
        let mensagem = 'Opção marcada';
        // Verifica se condicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeeBreak são verdadeiros
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            // Se a condição anterior for verdadeira adiciona mensagem ao array flexDeComputadores
            flexDeComputadores.push(mensagem);
        }
        // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui atribui Opção desmarcada a variavel mensagem
        let mensagem = 'Opção desmarcada';
        // Verifica se condicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeeBreak são verdadeiros
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            // Se a condição anterior for verdadeira adiciona mensagem ao array flexDeComputadores
            flexDeComputadores.push(mensagem);
        }
    }
    // Desmarca a opção de pc
    pc.checked = false;
    // Fornece acesso ao elemento de id flexProjetor.
    const projetor = document.querySelector('#flexProjetor');
    // Verifica se a opção de projetor for marcada
    if (projetor.checked) {
        // Se a condição anterior for verdadeiro atribui Opção marcada a variavel mensagem
        let mensagem = 'Opção marcada';
        // Verifica se condicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeeBreak são verdadeiros
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            // Se a condição anterior for verdadeiro adiciona mensagem ao array flexDeProjetor
            flexDeProjetor.push(mensagem);
        }
        // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui atribui Opção desmarcada a variavel mensagem
        let mensagem = 'Opção desmarcada';
        // Verifica se condicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeeBreak são verdadeiros
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            // Se a condição anterior for verdadeira adiciona mensagem ao array flexDeProjetor
            flexDeProjetor.push(mensagem);
        }
    }
    // Desmarca a opção de projetor
    projetor.checked = false;
    // Fornece acesso ao elemento de id flexLousaInterativa.
    const lousa = document.querySelector('#flexLousaInterativa');
    // Verifica se a opção de lousa for marcada
    if (lousa.checked) {
        // Se a condição anterior for verdadeiro atribui Opção marcada a variavel mensagem
        let mensagem = 'Opção marcada';
        // Verifica se condicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeeBreak são verdadeiros
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            // Se a condição anterior for verdadeiro adiciona mensagem ao array flexDeLousaInterativa
            flexDeLousaInterativa.push(mensagem);
        }
        // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui atribui Opção desmarcada a variavel mensagem
        let mensagem = 'Opção desmarcada';
        // Verifica se condicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeeBreak são verdadeiros
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            // Se a condição anterior for verdadeiro adiciona mensagem ao array flexDeLousaInterativa
            flexDeLousaInterativa.push(mensagem);
        }
    }
    // Desmarca a opção de lousa
    lousa.checked = false
    // Fornece acesso ao elemento de id flexMaterial.
    const material = document.querySelector('#flexMaterial');
    // Verifica se a opção de material for marcada
    if (material.checked) {
        // Se a condição anterior for verdadeira atribui Opção marcada a variavel mensagem
        let mensagem = 'Opção marcada';
        // Verifica se condicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeeBreak são verdadeiros
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            // Se a condição anterior for verdadeira adiciona mensagem ao array flexDeMaterial
            flexDeMaterial.push(mensagem);
        }
        // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui atribui Opção desmarcada a variavel mensagem
        let mensagem = 'Opção desmarcada';
        // Verifica se condicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeeBreak são verdadeiras
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            // Se a condição anterior for verdadeira adiciona mensagem ao array flexDeMaterial
            flexDeMaterial.push(mensagem);
        }
    }
    // Desmarca a opção de material
    material.checked = false;

    // Verifica se codicaoCodigo, condicaoLocal, condicaoCapacidade e condicaoCoffeeBreak são verdadeiras
    if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
        // Se a condição anterior for verdadeira adiciona codigoSala, localSala e capacidadeAluno aos seus respectivos arrays e dispara um alert Cadastro efetuado com sucesso
        codigoDaSala.push(codigoSala);
        localDaSala.push(localSala);
        capacidadeDeAluno.push(capacidadeAluno);
        alert('Cadastro efetuado com sucesso!');
    }
}
// Função addOpcoes
function addOpcoes() {
    // Verifica se o tamanho do array opcoes é estritamente igual a 0
    if (opcoes.length === 0) {
        // Se a condição anterior for verdadeira adiciona Sala Livre, Sala Agendada e Sala Ocupada ao array opcoes
        opcoes.push('Sala Livre');
        opcoes.push('Sala Agendada');
        opcoes.push('Sala Ocupada');
    }
}
// Função salvarOpcoes armazena um valor chamado opcoes no armazenamento local do navegador usando o formato JSON.
function salvarOpcoes() {
    localStorage.setItem('opcoes', JSON.stringify(opcoes));
}
// Função salvarCodigoSala armazena um valor chamado codigoDaSala no armazenamento local do navegador usando o formato JSON.
function salvarCodigoSala() {
    localStorage.setItem('codigoDaSala', JSON.stringify(codigoDaSala));
}
// Função salvarLocalSala armazena um valor chamado localDaSala no armazenamento local do navegador usando o formato JSON.
function salvarLocalSala() {
    localStorage.setItem('localDaSala', JSON.stringify(localDaSala));
}
// Função salvarCapacidadeAlunos armazena um valor chamado capacidadeDeAluno no armazenamento local do navegador usando o formato JSON.
function salvarCapacidadeAlunos() {
    localStorage.setItem('capacidadeDeAluno', JSON.stringify(capacidadeDeAluno));
}
// Função salvarComputadores armazena um valor chamado flexDeComputadores no armazenamento local do navegador usando o formato JSON.
function salvarComputadores() {
    localStorage.setItem('flexDeComputadores', JSON.stringify(flexDeComputadores));
}
// Função salvarProjetores armazena um valor chamado flexDeProjetor no armazenamento local do navegador usando o formato JSON.
function salvarProjetores() {
    localStorage.setItem('flexDeProjetor', JSON.stringify(flexDeProjetor));
}
// Função salvarLousaInterativa armazena um valor chamado flexDeLousaInterativa no armazenamento local do navegador usando o formato JSON.
function salvarLousaInterativa() {
    localStorage.setItem('flexDeLousaInterativa', JSON.stringify(flexDeLousaInterativa));
}
// Função salvarMaterial armazena um valor chamado flexDeMaterial no armazenamento local do navegador usando o formato JSON.
function salvarMaterial() {
    localStorage.setItem('flexDeMaterial', JSON.stringify(flexDeMaterial));
}
// Função salvarSim armazena um valor chamado flexDeRadioSim no armazenamento local do navegador usando o formato JSON.
function salvarSim() {
    localStorage.setItem('flexDeRadioSim', JSON.stringify(flexDeRadioSim));
}
// Função salvarNao armazena um valor chamado flexDeRadioNao no armazenamento local do navegador usando o formato JSON.
function salvarNao() {
    localStorage.setItem('flexDeRadioNao', JSON.stringify(flexDeRadioNao));
}
// Função debug/teste para remover itens do array
// function removerItem() {

//     localStorage.removeItem('codigoDaSala');
//     localStorage.removeItem('localDaSala');
//     localStorage.removeItem('capacidadeDeAluno');
//     localStorage.removeItem('flexDeComputadores');
//     localStorage.removeItem('flexDeProjetor');
//     localStorage.removeItem('flexDeLousaInterativa');
//     localStorage.removeItem('flexDeMaterial');
//     localStorage.removeItem('flexDeRadioSim');
//     localStorage.removeItem('flexDeRadioNao');

//     const valorRemovido = localStorage.getItem('codigoDaSala');
//     const valorRemovido2 = localStorage.getItem('localDaSala');
//     const valorRemovido3 = localStorage.getItem('capacidadeDeAluno');
//     const valorRemovido4 = localStorage.getItem('flexDeComputadores');
//     const valorRemovido5 = localStorage.getItem('flexDeProjetor');
//     const valorRemovido6 = localStorage.getItem('flexDeLousaInterativa');
//     const valorRemovido7 = localStorage.getItem('flexDeMaterial');
//     const valorRemovido8 = localStorage.getItem('flexDeRadioSim');
//     const valorRemovido9 = localStorage.getItem('flexDeRadioNao');

//     if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null && valorRemovido4 === null && valorRemovido5 === null && valorRemovido6 === null && valorRemovido7 === null && valorRemovido8 === null && valorRemovido9 === null) {
//         console.log('Item removido com sucesso!');
//     } else {
//         console.log('Erro ao remover o item.');
//     }
// }
// Exibe no console os arrays
// console.log(`Código Da Sala: ${codigoDaSala}`);
// console.log(`Local Sala: ${localDaSala}`);
// console.log(`Capacidade Aluno: ${capacidadeDeAluno}`)
// console.log(`Computadores: ${flexDeComputadores}`)
// console.log(`Projetor: ${flexDeProjetor}`)
// console.log(`Lousa Interativa: ${flexDeLousaInterativa}`)
// console.log(`Material: ${flexDeMaterial}`)
// console.log(`Coffee Break Sim: ${flexDeRadioSim}`)
// console.log(`Coffee Break Não: ${flexDeRadioNao}`)
// Função cadastrar executa as funções cadastrarSala, salvarCodigoSala, salvarLocalSala, salvarCapacidadeAlunos, salvarComputadores, salvarProjetores, salvarLousaInterativa, salvarMaterial, salvarSim, salvarNao, salvarOpcoes
function cadastrar() {
    cadastrarSala();
    salvarCodigoSala();
    salvarLocalSala();
    salvarCapacidadeAlunos();
    salvarComputadores();
    salvarProjetores();
    salvarLousaInterativa();
    salvarMaterial();
    salvarSim();
    salvarNao();
    addOpcoes();
    salvarOpcoes();
}
// Evento de enviar o formulario
formulario.addEventListener('submit', function (evento) {
    // Controla o fluxo dos eventos
    evento.preventDefault()
    // Chama a função cadastrar
    cadastrar();
})