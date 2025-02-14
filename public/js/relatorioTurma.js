const codigoDaTurma = JSON.parse(localStorage.getItem('codigoDaTurma') || '[]');
const opcaoCursoSelecionada = JSON.parse(localStorage.getItem('opcaoCursoSelecionada') || '[]');
const opcaoAlunosSelecionados = JSON.parse(localStorage.getItem('opcaoAlunosSelecionados') || '[]');

// console.log(`Código da Turma: ${codigoDaTurma}`);
// console.log(`Opção Curso Selecionada: ${opcaoCursoSelecionada}`);
// console.log(`Opção Alunos Selecionados: ${opcaoAlunosSelecionados}`);

// Exibir informações de cada aluno
for (let indice = 0; indice < codigoDaTurma.length; indice++) {
    
    const cardContainer = document.getElementById('cardsContainer');

    const card = document.createElement('div');
    card.classList.add('cartao');

    const elementoCodigo = document.createElement('p');
    elementoCodigo.textContent = `Código da Turma: ${codigoDaTurma[indice]}`;

    const elementoCurso = document.createElement('p');
    elementoCurso.textContent = `Curso Selecionado: ${opcaoCursoSelecionada[indice]}`;

    const elementoAluno = document.createElement('p');
    elementoAluno.textContent = `Aluno Selecionado: ${opcaoAlunosSelecionados[indice]}`;

    card.appendChild(elementoCodigo);
    card.appendChild(elementoCurso);
    card.appendChild(elementoAluno);
    cardContainer.appendChild(card);
}