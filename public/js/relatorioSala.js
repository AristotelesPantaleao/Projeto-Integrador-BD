// Função para criar um card para cada sala
const codigoDaSala = JSON.parse(localStorage.getItem('codigoDaSala') || '[]');
const localDaSala = JSON.parse(localStorage.getItem('localDaSala') || '[]');
const capacidadeDeAluno = JSON.parse(localStorage.getItem('capacidadeDeAluno') || '[]');
const flexDeComputadores = JSON.parse(localStorage.getItem('flexDeComputadores') || '[]');
const flexDeProjetor = JSON.parse(localStorage.getItem('flexDeProjetor') || '[]');
const flexDeLousaInterativa = JSON.parse(localStorage.getItem('flexDeLousaInterativa') || '[]');
const flexDeMaterial = JSON.parse(localStorage.getItem('flexDeMaterial') || '[]');
const flexDeRadioSim = JSON.parse(localStorage.getItem('flexDeRadioSim') || '[]');
const flexDeRadioNao = JSON.parse(localStorage.getItem('flexDeRadioNao') || '[]');
//const opcoes = JSON.parse(localStorage.getItem('opcoes') || '[]');

function createSalaCard(codigo, local, capacidade, computadores, projetor, lousa, material, coffeeSim, coffeeNao) {
    const cardContainer = document.getElementById('cardsContainer');

    const card = document.createElement('div');
    card.classList.add('cartao');

    const codigoElement = document.createElement('p');
    codigoElement.textContent = `Código: ${codigo}`;

    const localElement = document.createElement('p');
    localElement.textContent = `Local da Sala: ${local}`;

    const capacidadeElement = document.createElement('p');
    capacidadeElement.textContent = `Capacidade de Alunos: ${capacidade}`;

    const computadorElement = document.createElement('p');
    computadorElement.textContent = `Computadores: ${computadores}`;

    const projetorElement = document.createElement('p');
    projetorElement.textContent = `Projetor: ${projetor}`;

    const lousaElement = document.createElement('p');
    lousaElement.textContent = `Lousa Interativa: ${lousa}`;

    const materialElement = document.createElement('p');
    materialElement.textContent = `Materiais (lápis, canetas, borrachas, papel): ${material}`;


    card.appendChild(codigoElement);
    card.appendChild(localElement);
    card.appendChild(capacidadeElement);
    card.appendChild(computadorElement);
    card.appendChild(projetorElement);
    card.appendChild(lousaElement);
    card.appendChild(materialElement);

    if (coffeeSim) {
        const coffeSimElement = document.createElement('p');
        coffeSimElement.textContent = `Coffe Break - SIM: ${coffeeSim}`;
        card.appendChild(coffeSimElement);
    }

    if (coffeeNao) {
        const coffeNaoElement = document.createElement('p');
        coffeNaoElement.textContent = `Coffe Break - NÃO: ${coffeeNao}`;
        card.appendChild(coffeNaoElement);
    }
    cardContainer.appendChild(card);
}

// Exibir informações de cada sala
for (let i = 0; i < codigoDaSala.length; i++) {
    createSalaCard(
        codigoDaSala[i],
        localDaSala[i],
        capacidadeDeAluno[i],
        flexDeComputadores[i],
        flexDeProjetor[i],
        flexDeLousaInterativa[i],
        flexDeMaterial[i],
        flexDeRadioSim[i],
        flexDeRadioNao[i]
    );
}