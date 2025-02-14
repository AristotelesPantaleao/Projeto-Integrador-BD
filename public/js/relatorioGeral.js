const nomeInstrutor = JSON.parse(localStorage.getItem('nomeInstrutor') || '[]')
const nomeCurso = JSON.parse(localStorage.getItem('nomeDoCurso') || '[]')
const codigoDaTurma = JSON.parse(localStorage.getItem('codigoDaTurma') || '[]')
const codigoDaSala = JSON.parse(localStorage.getItem('codigoDaSala') || '[]')
const localDaSala = JSON.parse(localStorage.getItem('localDaSala') || '[]')
const nomeDoAluno = JSON.parse(localStorage.getItem('nomeDoAluno') || '[]')

// console.log(nomeInstrutor)
// console.log(nomeCurso)
// console.log(codigoDaTurma)
// console.log(codigoDaSala)
// console.log(localDaSala)
// console.log(nomeDoAluno)


// Função para criar um card para tudo
function createInstructorCard(instrutor, nomeCurso, codigoTurma, codigoSala, localSala, nomeAluno) {
    const cardContainer = document.getElementById('cardsContainer')

    const card = document.createElement('div')
    card.classList.add('cartao')

    const nomeInstrutorElement = document.createElement('p')
    nomeInstrutorElement.textContent = `Instrutor: ${instrutor}`

    const nomeCursoElement = document.createElement('p')
    nomeCursoElement.textContent = `Nome do Curso: ${nomeCurso}`

    const codigoTurmaElement = document.createElement('p')
    codigoTurmaElement.textContent = `Código da Turma: ${codigoTurma}`

    const codigoSalaElement = document.createElement('p')
    codigoSalaElement.textContent = `Código da Sala: ${codigoSala}`

    const localSalaElement = document.createElement('p')
    localSalaElement.textContent = `Local da Sala: ${localSala}`

    const nomeAlunoElement = document.createElement('p')
    nomeAlunoElement.textContent = `Nome do Aluno: ${nomeAluno}`

    card.appendChild(nomeInstrutorElement)
    card.appendChild(nomeCursoElement)
    card.appendChild(codigoTurmaElement)
    card.appendChild(codigoSalaElement)
    card.appendChild(localSalaElement)
    card.appendChild(nomeAlunoElement)

    cardContainer.appendChild(card)
}

// Exibir informações do relatório geral
for (let i = 0; i < codigoDaTurma.length; i++) {
    createInstructorCard(nomeInstrutor[i], nomeCurso[i], codigoDaTurma[i], codigoDaSala[i], localDaSala[i], nomeDoAluno[i])
}