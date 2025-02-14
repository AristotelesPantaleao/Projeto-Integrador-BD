// Recebe codigoDaSala como parâmetro e se não existir retorna um Array vazio.
const codigoDaSala = JSON.parse(localStorage.getItem('codigoDaSala') || '[]');
// Recebe nomeInstrutor como parâmetro e se não existir retorna um Array vazio.
const nomeInstrutor = JSON.parse(localStorage.getItem('nomeInstrutor') || '[]');
// Recebe nomeDoCurso como parâmetro e se não existir retorna um Array vazio.
const nomeDoCurso = JSON.parse(localStorage.getItem('nomeDoCurso') || '[]');
// Recebe localDaSala como parâmetro e se não existir retorna um Array vazio.
const localDaSala = JSON.parse(localStorage.getItem('localDaSala') || '[]');
// Recebe opcoes como parâmetro e se não existir retorna um Array vazio.
const opcoes = JSON.parse(localStorage.getItem('opcoes') || '[]');
// Exibe no console os arrays.
// console.log(`Código Da Sala: ${codigoDaSala}`);
// console.log(`Nome do Instrutor: ${nomeInstrutor}`);
// console.log(`Nome do Curso: ${nomeDoCurso}`);
// console.log(`Local Sala: ${localDaSala}`);
// console.log(`Opções: ${opcoes}`);
// Seleciona o elemento main.
const elementoPrincipal = document.querySelector('main');
// Verificar se tem codigoDaSala, nomeInstrutor, nomeDoCurso, localDaSala e opcoes, para só criar o card quando existir ao menos um valor de cada.
if (elementoPrincipal && codigoDaSala.length > 0 && nomeInstrutor.length > 0 && nomeDoCurso.length > 0 && localDaSala.length > 0 && opcoes.length > 0) {
    // Define o estilo para flex, ou seja o elemento principal sera exibido como um container flexbox.
    elementoPrincipal.style.display = 'flex';
    // Define como os itens dentro do container flexbox vão ser quebrados em linhas quando o espaço horizontal for insuficiente.
    elementoPrincipal.style.flexWrap = 'wrap';
    // Cria os cards
    for (let indice = 0; indice < codigoDaSala.length; indice++) {
        // Cria o container com classe container4
        const container4 = document.createElement('div');
        container4.className = 'container4';
        // Adiciona esse elemento no elementoPrincipal
        elementoPrincipal.appendChild(container4);
        // Cria o container com classe mini-container
        const miniContainer = document.createElement('div');
        miniContainer.className = 'mini-container';
        // Adiciona esse elemento no contaienr4
        container4.appendChild(miniContainer);
        // Cria o card com classe card, id salaLivre, e style de 18ream e atributo
        const elementoCard = document.createElement('div');
        elementoCard.className = 'card';
        elementoCard.id = 'salaLivre';
        elementoCard.style.width = '18rem';
        elementoCard.setAttribute('data-card-id', `${indice + 1}`);
        // Adiciona esse elemento no miniContainer
        miniContainer.appendChild(elementoCard);
        // Cria o formulario com id formulario
        const formulario = document.createElement('form');
        formulario.id = 'formulario';
        // Adiciona esse elemento no elementoCard
        elementoCard.appendChild(formulario);
        // Cria o cardBody com classe card-body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        // Adiciona esse elemento no formulario;
        formulario.appendChild(cardBody);
        // Cria o elemento h5 com classe card-title e id centralizar e com texto Sala indice + 1;
        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.id = 'centralizar';
        h5.textContent = `Sala ${indice + 1}`;
        // Adiciona esse elemento no cardBody
        cardBody.appendChild(h5);
        // Cria o elemento div com classe
        const div = document.createElement('div');
        div.className = 'form-floating';
        // Adiciona div no cardBody
        cardBody.appendChild(div);
        // Cria o elemento select com class style id e atributo
        const select = document.createElement('select');
        select.className = 'form-select';
        select.required = true;
        select.style.marginBottom = '10px';
        select.id = `opcao-instrutor-${indice + 1}`;
        select.setAttribute('aria-label', 'Floating label select example');
        // Adiciona o elemento select ao elemento div
        div.appendChild(select);
        // Cria o elemento option com text content e um valor ja verdadeiro
        const option = document.createElement('option');
        option.selected = true;
        option.disabled = true;
        // option.textContent = 'Selecione o Instrutor';
        // Adiciona o elemento option ao elemento select
        select.appendChild(option);
        // Cria no select todas as opções de nomeInstrutor
        for (let indice = 0; indice < nomeInstrutor.length; indice++) {
            const nome = nomeInstrutor[indice];
            const opcao = document.createElement('option');
            opcao.id = `${indice}`;
            opcao.value = nome;
            opcao.textContent = nome;
            select.appendChild(opcao);
        }
        // Cria o label do select
        const labelDoSelect = document.createElement('label');
        labelDoSelect.setAttribute('for', 'floatingSelect');
        labelDoSelect.textContent = 'Escolha o Instrutor';
        // ADiciona o elemento labelDoSelect ao elemento div
        div.appendChild(labelDoSelect);
        // Cria o elemento select com classe style id e atributo
        const select2 = document.createElement('select');
        select2.className = 'form-select';
        select2.style.marginBottom = '10px';
        select2.required = true;
        select2.id = `opcao-curso-${indice + 1}`;
        select2.setAttribute('arial-label', 'Floating label select example');
        // Adiciona o elemento select2 a div
        div.appendChild(select2);
        // Cria o elemento option2 com text content e um valor ja verdadeiro
        const option2 = document.createElement('option');
        option2.selected = true;
        option2.disabled = true;
        // option2.textContent = 'Selecione o Curso';
        // Adiciona o elemento option2 ao elemento select2
        select2.appendChild(option2);
        // Cria no select2 todas as opções de nomeDoCurso;
        for (let indice = 0; indice < nomeDoCurso.length; indice++) {
            const nome = nomeDoCurso[indice];
            const opcao = document.createElement('option');
            opcao.value = nome;
            opcao.textContent = nome
            select2.appendChild(opcao);
        }
        // Cria o label do select2
        const labeldoSelect2 = document.createElement('label');
        labeldoSelect2.setAttribute('for', 'floatingSelect');
        labeldoSelect2.textContent = 'Escolha o Curso';
        // Define a posição do textContent no lugar certo
        labeldoSelect2.style.top = select2.offsetTop + 'px';
        labeldoSelect2.style.left = select2.offsetLeft + 'px';
        // ADiciona o elemento labeldoSelect2 ao elemento div
        div.appendChild(labeldoSelect2);
        // Cria o elemento label com textContent e atributo
        const label = document.createElement('label');
        label.textContent = 'Data:';
        label.setAttribute('for', 'data');
        // Adiciona o elemento label ao cardBody
        cardBody.appendChild(label);
        // Cria o elemento input com type e id
        const input = document.createElement('input');
        input.type = 'date';
        input.required = true;
        input.id = `data-${indice + 1}`;
        input.style.marginLeft = '5px';
        // Adiciona o elemento input ao cardBody
        cardBody.appendChild(input);
        // Cria o elemento br
        const br = document.createElement('br');
        // Adiciona o elemento br ao cardBody
        cardBody.appendChild(br);
        // Cria o elemento label2
        const label2 = document.createElement('label');
        label2.textContent = 'Hora Inicial:';
        label2.setAttribute('for', 'hora');
        // Adiciona o elemento label2 ao cardBody
        cardBody.appendChild(label2);
        // Cria o elemento input2 com type e id
        const input2 = document.createElement('input');
        input2.type = 'time';
        input2.required = true;
        input2.id = `hora-${indice + 1}`;
        input2.style.marginLeft = '3px';
        // Adiciona o elemento input2 ao cardBody
        cardBody.appendChild(input2);
        // Cria o elemento br2
        const br2 = document.createElement('br');
        // Adiciona o elemento br2 ao cardBody
        cardBody.appendChild(br2);
        // Cria o elemento label3
        const label3 = document.createElement('label');
        label3.textContent = 'Hora Final:';
        label3.setAttribute('for', 'hora');
        // Adiciona o elemento label3 ao cardBody
        cardBody.appendChild(label3);
        // Cria o elemento input3 com type e id
        const input3 = document.createElement('input');
        input3.type = 'time';
        input3.required = true;
        input3.id = `horaFinal-${indice + 1}`;
        input3.style.marginLeft = '11px';
        // Adiciona o elemento input3 ao cardBody
        cardBody.appendChild(input3);
        // Cria o elemento br3
        const br3 = document.createElement('br');
        // Adiciona o elemento br3 ao cardBody
        cardBody.appendChild(br3);
        // Cria o elemento select com classe style id e atributo
        const select3 = document.createElement('select');
        select3.className = 'form-select';
        select3.style.marginBottom = '10px';
        select3.required = true;
        select3.id = `opcao-local-${indice + 1}`;
        select3.setAttribute('arial-label', 'Floating label select example');
        // Adiciona o elemento select3 a div
        div.appendChild(select3);
        // Cria o elemento option3 com text content e um valor ja verdadeiro
        const option3 = document.createElement('option');
        option3.selected = true;
        option3.disabled = true;
        // option3.textContent = 'Selecione o Local';
        // Adiciona o elemento option3 ao elemento select2
        select3.appendChild(option3);
        // Cria no select2 todas as opções de localDaSala;
        for (let indice = 0; indice < localDaSala.length; indice++) {
            const nome = localDaSala[indice];
            const opcao = document.createElement('option');
            opcao.value = nome;
            opcao.textContent = nome;
            select3.appendChild(opcao);
        }
        // Cria o label do select3
        const labelDoSelect3 = document.createElement('label');
        labelDoSelect3.setAttribute('for', 'floatingSelect');
        labelDoSelect3.textContent = 'Escolha o Local';
        // Define a posição do textContent no lugar certo.
        labelDoSelect3.style.top = select3.offsetTop + 'px';
        labelDoSelect3.style.left = select3.offsetLeft + 'px';
        // ADiciona o elemento labelDoSelect3 ao elemento div
        div.appendChild(labelDoSelect3);
        // Cria o elemento select com classe style id e atributo
        const select4 = document.createElement('select');
        select4.className = 'form-select';
        select4.style.marginBottom = '10px';
        select4.id = `opcao-status-${indice + 1}`;
        select4.required = true;
        select4.setAttribute('arial-label', 'Floating label select example');
        // Adiciona o elemento select4 a div
        div.appendChild(select4);
        // Cria o elemento option2 com text content e um valor ja verdadeiro
        const option4 = document.createElement('option');
        option4.selected = true;
        option4.disabled = true;
        // option4.textContent = 'Selecione o Status da sala';
        // Adiciona o elemento option4 ao elemento select4
        select4.appendChild(option4);
        // Cria no select4 todas as opções de opcoes;
        for (let indice = 0; indice < opcoes.length; indice++) {
            const nome = opcoes[indice];
            const opcao = document.createElement('option');
            opcao.value = nome;
            opcao.textContent = nome;
            select4.appendChild(opcao);
        }
        // Cria o label do select4
        const labelDoSelect4 = document.createElement('label');
        labelDoSelect4.setAttribute('for', 'floatingSelect');
        labelDoSelect4.textContent = 'Escolha o Status';
        // Define a posição do textContent no lugar certo
        labelDoSelect4.style.top = select4.offsetTop + 'px';
        labelDoSelect4.style.left = select4.offsetLeft + 'px';
        // ADiciona o elemento labelDoSelect4 ao elemento div
        div.appendChild(labelDoSelect4);
        // Cria o elemento botao com class type id e textContent
        const botao = document.createElement('button');
        botao.className = `btn btn-light ${indice + 1}`;
        botao.type = 'button'; // Trocar para submit quando for fazer os testes do eventListener se precisar
        botao.id = 'botao4';
        botao.textContent = 'Salvar';
        // Adiciona o elemento botao ao cardBody
        cardBody.appendChild(botao);
        // Recebe opcaoInstrutor com base no indice de cada card como parâmetro e se não existir retorna um Array vazio.
        const arrayInstrutor = JSON.parse(localStorage.getItem(`opcaoInstrutor${indice + 1}`) || '[]');
        // Recebe opcaoCurso com base no indice de cada card como parâmetro e se não existir retorna um Array vazio.
        const arrayCurso = JSON.parse(localStorage.getItem(`opcaoCurso${indice + 1}`) || '[]');
        // Recebe opcaoLocal com base no indice de cada card como parâmetro e se não existir retorna um Array vazio.
        const arrayLocal = JSON.parse(localStorage.getItem(`opcaoLocal${indice + 1}`) || '[]');
        // Recebe opcaoStatus com base no indice de cada card como parâmetro e se não existir retorna um Array vazio.
        const arrayStatus = JSON.parse(localStorage.getItem(`opcaoStatus${indice + 1}`) || '[]');
        // Exibe no console o card e os arrays daquele card
        // console.log(`Card ${indice + 1}`);
        // console.log(`Opção Instrutor ${indice + 1}: ${arrayInstrutor}`);
        // console.log(`Opção Curso ${indice + 1}: ${arrayCurso}`);
        // console.log(`Opção Local ${indice + 1}: ${arrayLocal}`);
        // console.log(`Opção Status ${indice + 1}: ${arrayStatus}`);

        // Função para adicionar a opção de instrutor que foi escolhido.
        function adicionarOpcaoInstrutor() {
            // Pega o valor do elemento que possui id opcao-instrutor com base no indice.
            const opcaoinstrutor = document.getElementById(`opcao-instrutor-${indice + 1}`).value;
            // Exibe no console a opção selecionada.
            // console.log(`Instrutor: ${opcaoinstrutor}`);
            // Verifica se a opção do instrutor é diferente da opção padrão do select.
            if (opcaoinstrutor !== 'Selecione o Instrutor') {
                // Se for diferente da opção padrão adiciona ao array.
                arrayInstrutor.push(opcaoinstrutor);
            }
        }
        // Função para adicionar a opção de curso que foi escolhido
        function adicionarOpcaoCurso() {
            // Pega o valor do elemento que possui id opcao-curso com base no indice
            const opcaoCurso = document.getElementById(`opcao-curso-${indice + 1}`).value;
            // Exibe no console a opção selecionada
            // console.log(`Curso: ${opcaoCurso}`);
            // Verifica se a opção do curso é diferente da opção padrão do select
            if (opcaoCurso !== 'Selecione o Curso') {
                // Se for diferente da opção padrão adiciona ao array.
                arrayCurso.push(opcaoCurso);
            }
        }
        // Função para adicionar a opção local que foi escolhido
        function adicionarOpcaoLocal() {
            // Pega o valor do elemento que possui id opcao-local com base no indice
            const opcaoLocal = document.getElementById(`opcao-local-${indice + 1}`).value;
            // Exibe no console a opção selecionada
            // console.log(`Local: ${opcaoLocal}`);
            // Verifica se a opção Local é diferente da opção padrão do select
            if (opcaoLocal !== 'Selecione o Local') {
                // Se for diferente da opção padrão adiciona ao array.
                arrayLocal.push(opcaoLocal);
            }
        }
        // Função para adicionar o status que foi escolhido
        function adicionarOpcaoStatus() {
            // Pega o valor do elemento que possui id opcao-status com base no indice
            const opcaoStatus = document.getElementById(`opcao-status-${indice + 1}`).value;
            // Exibe no console o status selecionado
            // console.log(`Status: ${opcaoStatus}`);
            // Verifica se o status selecionado é estritamente diferente da opção padrao do select
            //if (opcaoStatus !== 'Selecione o Status da sala') {
            // Se a condição de cima for verdadeira ele verifica se a opcaoStatus é estritamente igual a Sala livre
            if (opcaoStatus === 'Sala Livre') {
                // Se a condição de cima for verdadeira ele muda o id do elementoCard para salaLivre mudando a cor do card para verde
                elementoCard.id = 'salaLivre';
                // Adiciona ao arrayStatus a opcaoStatus
                arrayStatus.push(opcaoStatus);
                // Verifica se a opcaoStatus é estritamente igual a Sala Agendada
            } else if (opcaoStatus === 'Sala Agendada') {
                // Se a condição de cima for verdadeira ela muda o id do elementoCard para salaAgendada mudando a cor do card para amarelo
                elementoCard.id = 'salaAgendada';
                // Adiciona ao arrayStatus a opcaoStatus
                arrayStatus.push(opcaoStatus);
                // Verifica se a opcaoStatus é estritamente igual a Sala Ocupada
            } else if (opcaoStatus === 'Sala Ocupada') {
                // Se a condição de cima for verdadeira ele muda o id do elementoCard para salaOcupada mudando a cor do card para vermelho
                elementoCard.id = 'salaOcupada';
                // Adiciona ao arrayStatus a opcaoStatus
                arrayStatus.push(opcaoStatus);
            }
            //}
        }
        // Salva um array chamado arrayInstrutor no localStorage convertendo-o para o formato JSON
        function salvarInstrutorArray() {
            localStorage.setItem(`opcaoInstrutor${indice + 1}`, JSON.stringify(arrayInstrutor));
        }
        // Salva um array chamado arrayCUrso no localStorage convertendo-o para o formato JSON
        function salvarCursoArray() {
            localStorage.setItem(`opcaoCurso${indice + 1}`, JSON.stringify(arrayCurso));
        }
        // Salva um array chamado arrayLocal no localStorage convertendo-o para o formato JSON
        function salvarLocalArray() {
            localStorage.setItem(`opcaoLocal${indice + 1}`, JSON.stringify(arrayLocal));
        }
        // Salva um array chamado arrayStatus no localStorage convertendo-o para o formato JSON
        function salvarStatusArray() {
            localStorage.setItem(`opcaoStatus${indice + 1}`, JSON.stringify(arrayStatus));
        }
        // Realiza as seguitnes funções quando o botão é clicado
        botao.addEventListener('click', function () {
            // Chama a função adicionarOpcaoInstrutor
            adicionarOpcaoInstrutor();
            // Chama a função adicionarOpcaoCurso
            adicionarOpcaoCurso();
            // Chama a função adicionarOpcaoLocal
            adicionarOpcaoLocal();
            // Chama a função adicionarOpcaoStatus
            adicionarOpcaoStatus();
            //Chama a função salvarInstrutorArray
            salvarInstrutorArray();
            // Chama a função salvarCursoArray
            salvarCursoArray();
            // Chama a função salvarLocalArray
            salvarLocalArray();
            // Chama a função salvarStatusArray
            salvarStatusArray();
            // Exibe um alert com base na sala de que as opções foram salvas.
            alert(`Sala ${indice + 1} salvo com sucesso!`);
        })
        // Busca o elemento opcao-instrutor com base no seu id e armazena em uma constante dropdown
        const dropdown = document.getElementById(`opcao-instrutor-${indice + 1}`);
        // Busca o elemento opcao-curso com base no seu id e armazena em uma constante dropdown2
        const dropdown2 = document.getElementById(`opcao-curso-${indice + 1}`);
        // Busca o elemento opcao-local com base no seu id e armazena em uma constante dropdown3
        const dropdown3 = document.getElementById(`opcao-local-${indice + 1}`);
        // Busca o elemento opcao-status com base no seu id e armazena em uma constante dropdown4
        const dropdown4 = document.getElementById(`opcao-status-${indice + 1}`);
        // Busca o elemento data com base no seu id e armazena em uma constante selecionarData
        const selecionarData = document.getElementById(`data-${indice + 1}`);
        // Busca o elemento hora com base no seu id e armazena em uma constante selecionarHora
        const selecionarHora = document.getElementById(`hora-${indice + 1}`);
        // Busca o elemento horaFinal com base no seu id e armazena em uma constante selecionarHoraFinal
        const selecionarHoraFinal = document.getElementById(`horaFinal-${indice + 1}`);

        // Monitora alterações no dropdown
        dropdown.addEventListener('change', function () {
            // Armazena o valor do item atualmente selecionado no dropdown
            const valorSelecionado = event.target.value;
            // Armazena o valor selecionado no armazenamento web do navegador
            localStorage.setItem(`dropdownSelecionado-${indice + 1}`, valorSelecionado);
            // Exibe no console o valor registrado
            // console.log('Valor selecionado:', valorSelecionado);
        })
        // Monitora alterações no dropdown2
        dropdown2.addEventListener('change', function () {
            // Armazena o valor do item atualmente selecionado no dropdown2
            const valorSelecionado = event.target.value;
            // Armazena o valor selecionado no armazenamento web do navegador
            localStorage.setItem(`dropdownSelecionado2-${indice + 1}`, valorSelecionado);
            // Exibe no console o valor registrado
            // console.log('Valor selecionado:', valorSelecionado);
        })
        // Monitora alterações no dropdown3
        dropdown3.addEventListener('change', function () {
            // Armazena o valor do item atualmente selecionado no dropdown3
            const valorSelecionado = event.target.value;
            // Armazena o valor selecionado no armazenamento web do navegador
            localStorage.setItem(`dropdownSelecionado3-${indice + 1}`, valorSelecionado);
            // Exibe no console o valor registrado
            // console.log('Valor selecionado:', valorSelecionado);
        })
        // Monitora alterações no dropdown4
        dropdown4.addEventListener('change', function () {
            // Armazena o valor do item atualmente selecionado no dropdown4
            const valorSelecionado = event.target.value;
            // Armazena o valor selecionado no armazenamento web do navegador
            localStorage.setItem(`dropdownSelecionado4-${indice + 1}`, valorSelecionado);
            // Exibe no console o valor registrado
            // console.log('Valor selecionado:', valorSelecionado);
        })
        // Monitora alterações na seleção de data
        selecionarData.addEventListener('change', function () {
            // Armazena o valor do item atualmente selecionado na data
            const valorSelecionado = event.target.value;
            // Armazena o valor selecionado no armazenamento web do navegador
            localStorage.setItem(`dataSelecionada-${indice + 1}`, valorSelecionado);
            // Exibe no console o valor registrado
            // console.log('Valor selecionado:', valorSelecionado);
        })
        // Monitora alterações na seleção da hora inicial
        selecionarHora.addEventListener('change', function () {
            // Armazena o valor do item atualmente selecionado na hora inicial
            const valorSelecionado = event.target.value;
            // Armazena o valor selecionado no armazenamento web do navegador
            localStorage.setItem(`horaSelecionada-${indice + 1}`, valorSelecionado);
            // Exibe no console o valor registrado
            // console.log('Valor selecionado:', valorSelecionado);
        })
        // Monitora alterações na seleção da hora final
        selecionarHoraFinal.addEventListener('change', function () {
            // Armazena o valor do item atualmente selecionado na hora final
            const valorSelecionado = event.target.value;
            // Armazena o valor selecionado no armazenamento web do navegador.
            localStorage.setItem(`horaFinal-${indice + 1}`, valorSelecionado);
            // Exibe no console o valor registrado
            // console.log('Valor selecionado', valorSelecionado);
        })
        // Executa um evento quando o conteúdo de uma página é carregada
        document.addEventListener('DOMContentLoaded', function () {
            // Recupera o valor armazenado no localStorage para dropdownSelecionado com base no indice e armazena em valorSalvo.
            const valorSalvo = localStorage.getItem(`dropdownSelecionado-${indice + 1}`);
            // Recupera o valor armazenado no localStorage para dropdownSelecionado2 com base no indice e armazena em valorSalvo.
            const valorSalvo2 = localStorage.getItem(`dropdownSelecionado2-${indice + 1}`);
            // Recupera o valor armazenado no localStorage para dropdownSelecionado3 com base no indice e armazena em valorSalvo.
            const valorSalvo3 = localStorage.getItem(`dropdownSelecionado3-${indice + 1}`);
            // Recupera o valor armazenado no localStorage para dropdownSelecionado4 com base no indice e armazena em valorSalvo.
            let valorSalvo4 = localStorage.getItem(`dropdownSelecionado4-${indice + 1}`);
            // Recupera o valor armazenado no localStorage para dataSelecionada com base no indice e armazena em valorSalvo.
            const valorSalvo5 = localStorage.getItem(`dataSelecionada-${indice + 1}`);
            // Recupera o valor armazenado no localStorage para horaSelecionada com base no indice e armazena em valorSalvo.
            const valorSalvo6 = localStorage.getItem(`horaSelecionada-${indice + 1}`);
            // Recupera o valor armazenado no localStorage para horaFinal com base no indice e armazena em valorSalvo.
            const valorSalvo7 = localStorage.getItem(`horaFinal-${indice + 1}`);

            let data = new Date(); // Data atual
            let ano = data.getFullYear(); // Ano atual
            let mes = data.getMonth() + 1; // Mês atual
            let dia = data.getDate(); // Dia atual
            let horas = data.getHours(); // Hora atual
            let minutos = data.getMinutes(); // Minutos atuais
            let horaCompleta = `${horas}:${minutos}`; // Horas e minutos atuais
            let dataAtual = `${ano}-0${mes}-${dia}`;

            // console.log('Data:', data);
            // console.log('Valor Salvo 5:', valorSalvo5);
            // console.log('Ano', ano);
            // console.log('Mês', mes);
            // console.log('Dia', dia); // Exibe apenas o dia da data atual
            // console.log('Horas:', horas) // Exibe apenas a hora da data atual
            // console.log("Minutos:", minutos); // Exibe apenas os minutos da data atual
            // console.log('Hora Completa', horaCompleta) // Exibe a hora completa ( horas e minutos )
            // console.log('Data atual:', dataAtual)

            if (mes < 10 && dia < 10) {
                dataAtual = `${ano}-0${mes}-0${dia}`;
            } else if (mes < 10 && dia == 10) {
                dataAtual = `${ano}-0${mes}-${dia}`
            } else if (mes < 10 && dia > 10) {
                dataAtual = `${ano}-0${mes}-${dia}`;
            } else if (mes == 10 && dia == 10) {
                dataAtual = `${ano}-${mes}-${dia}`;
            } else if (mes == 10 && dia < 10) {
                dataAtual = `${ano}-${mes}-0${dia}`;
            } else if (mes == 10 && dia > 10) {
                dataAtual = `${ano}-${mes}-${dia}`;
            } else if (mes > 10 && dia < 10) {
                dataAtual = `${ano}-${mes}-0${dia}`;
            } else if (mes > 10 && dia >= 10) {
                dataAtual = `${ano}-${mes}-${dia}`;
            } else if (mes > 10 && dia > 10) {
                dataAtual = `${ano}-${mes}-${dia}`;
            }


            if (dataAtual === valorSalvo5) {
                // Converte horaCompleta para uma string ( texto ) e verifica se ele é maior ou igual ao valorSalvo6 e se o valorSalvo4 é estritamente igual a Sala Agendada
                if (horaCompleta.toString() >= valorSalvo6 && valorSalvo4 === 'Sala Agendada') {
                    // Se a condição de cima for verdadeira muda o valor de valorSalvo4 mudando a cor do card de amarelo para vermelho, indicando que a sala está ocupada.
                    valorSalvo4 = 'Sala Ocupada';
                    // Converte horaComplete para uma string ( text ) e verifica se ele é maior que o valorSalvo7 e se o valorSalvo4 é estritamente igual a Sala Ocupada
                    if (horaCompleta.toString() > valorSalvo7 && valorSalvo4 === 'Sala Ocupada') {
                        // Se a condição de cima for verdadeira muda o valor de valorSalvo4 mudando a cor do card de vermelho para verde, indicando que a sala está livre.
                        valorSalvo4 = 'Sala Livre';
                    }
                    // Se a condição do if for falsa ele verifica se horaCompleta convertida para string ( texto ) é menor que valorSalvo6 e se valorSalvo4 é estritamente igual a Sala Agendada
                } else if (horaCompleta.toString() < valorSalvo6 && valorSalvo4 === 'Sala Agendada') {
                    // Se a condição de cima for verdadeira ele faz com que o valorSalvo4 permaneça Sala Agendada indicando que a sala está agendada.
                    valorSalvo4 = 'Sala Agendada';
                }
            }
            // Exibe no console a Data, hora inicial e hora final
            // console.log('Data:', valorSalvo5);
            // console.log('Hora Inicial:', valorSalvo6);
            // console.log('Hora Final', valorSalvo7);
            // Muda o id do elementoCard com base no valorSalvo4
            if (valorSalvo4 === 'Sala Livre') {
                elementoCard.id = 'salaLivre';
            } else if (valorSalvo4 === 'Sala Agendada') {
                elementoCard.id = 'salaAgendada';
            } else if (valorSalvo4 === 'Sala Ocupada') {
                elementoCard.id = 'salaOcupada';
            }
            // Aqui salva o valor dos selects com base no valor escolhido em qualquer uma dos valorSalvo
            if (valorSalvo || valorSalvo2 || valorSalvo3 || valorSalvo4 || valorSalvo5 || valorSalvo6 || valorSalvo7) {
                dropdown.value = valorSalvo;
                dropdown2.value = valorSalvo2;
                dropdown3.value = valorSalvo3;
                dropdown4.value = valorSalvo4;
                selecionarData.value = valorSalvo5;
                selecionarHora.value = valorSalvo6;
                selecionarHoraFinal.value = valorSalvo7;
            }
        })
        // Função de teste/debug para remover os valores dos arrays.
        // function removerItem() {
        //     localStorage.removeItem(`opcaoInstrutor${indice + 1}`);
        //     localStorage.removeItem(`opcaoCurso${indice + 1}`);
        //     localStorage.removeItem(`opcaoLocal${indice + 1}`);
        //     localStorage.removeItem(`opcaoStatus${indice + 1}`);
        //     localStorage.removeItem(`dropdownSelecionado-${indice + 1}`);
        //     localStorage.removeItem(`dropdownSelecionado2-${indice + 1}`);
        //     localStorage.removeItem(`dropdownSelecionado3-${indice + 1}`);
        //     localStorage.removeItem(`dropdownSelecionado4-${indice + 1}`);
        //     localStorage.removeItem(`dataSelecionada-${indice + 1}`);
        //     localStorage.removeItem(`horaSelecionada-${indice + 1}`);
        //     localStorage.removeItem(`horaFinal-${indice + 1}`);
        //     localStorage.removeItem('armazenarOpcaoInstrutor');

        //     const valorRemovido = localStorage.getItem(`opcaoInstrutor${indice + 1}`);
        //     const valorRemovido2 = localStorage.getItem(`opcaoCurso${indice + 1}`);
        //     const valorRemovido3 = localStorage.getItem(`opcaoLocalr${indice + 1}`);
        //     const valorRemovido4 = localStorage.getItem(`opcaoStatus${indice + 1}`);
        //     const valorRemovido5 = localStorage.getItem(`dropdownSelecionado-${indice + 1}`);
        //     const valorRemovido6 = localStorage.getItem(`dropdownSelecionado2-${indice + 1}`);
        //     const valorRemovido7 = localStorage.getItem(`dropdownSelecionado3-${indice + 1}`);
        //     const valorRemovido8 = localStorage.getItem(`dropdownSelecionado4-${indice + 1}`);
        //     const valorRemovido9 = localStorage.getItem(`dataSelecionada-${indice + 1}`);
        //     const valorRemovido10 = localStorage.getItem(`horaSelecionada-${indice + 1}`);
        //     const valorRemovido11 = localStorage.getItem(`horaFinal-${indice + 1}`);
        //     const valorRemovido12 = localStorage.getItem('armazenarOpcaoInstrutor');

        //     if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null && valorRemovido4 === null && valorRemovido5 === null && valorRemovido6 === null && valorRemovido7 === null && valorRemovido8 === null && valorRemovido9 === null && valorRemovido10 === null && valorRemovido11 === null && valorRemovido12 === null) {
        //         console.log('Item removido com sucesso!');
        //     } else {
        //         console.log('Erro ao remover o item.');
        //     }
        // }

    }
}
