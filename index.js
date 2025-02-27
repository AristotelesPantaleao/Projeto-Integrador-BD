// Requisição dos módulos
const express = require('express')
const exphbs = require('express-handlebars')
const mysql2 = require('mysql2')

const app = express()

// Configurar o express para pegar o body
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json()) // Para capturar o body em JSON.

app.engine("handlebars", exphbs.engine()) // renderizar o controle do servidor de aplicação para o handlebars
app.set("view engine", "handlebars") // o que estiver na views com extensões handlebars será renderizado

// Liberar o uso de CSS para estilizar os layouts
app.use(express.static("public"))

//Rotas - rota padrão será o home
app.get("/", (req, res) => {
    res.render("home", { css: 'telaDeLogin.css' })
})

app.get("/cadastro", (req, res) => {
    res.render("cadastro", { css: 'telaDeLogin.css' })
})

app.get("/menu", (req, res) => {
    res.render("menu")
})

app.get("/cadastroDeAlunos", (req, res) => {
    res.render("cadastroDeAlunos")
})

app.get("/cadastroDeCursos", (req, res) => {
    res.render("cadastroDeCursos")
})

app.get("/cadastroDeInstrutores", (req, res) => {
    res.render("cadastroDeInstrutores")
})

app.get("/cadastroDeSalas", (req, res) => {
    res.render("cadastroDeSalas")
})

app.get("/cadastroDeTurmas", (req, res) => {
    const query = 'SELECT nomeCurso FROM cadastro_Cursos'

    const query2 = 'SELECT nomeAluno, sobrenomeAluno FROM cadastro_Alunos'

    const query3 = 'SELECT nomeInstrutor, sobrenomeInstrutor FROM cadastro_Instrutores'

    console.log(query)

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query: ", err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        connection.query(query2,(err,results2) => {
            if(err){
                console.error("Erro ao executar a query: ",err.stack)
                res.status(500).send("Erro ao buscar dados")
                return
            }

            connection.query(query3,(err,results3) => {
                if(err){
                    console.error("Erro ao executar a query: ",err.stack)
                    res.status(500).send("Erro ao buscar dados")
                    return
                }

                res.render('cadastroDeTurmas', { data: results, data2: results2, data3: results3 })
            })
            
        })
    })

})


app.get("/relatorios", (req, res) => {
    res.render("relatorios")
})

app.get("/relatorioAluno", (req, res) => {
    const query = 'SELECT * FROM cadastro_Alunos'

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query: ", err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        res.render('relatorioAluno', { data: results })
    })
})

app.get("/relatorioCurso", (req, res) => {
    const query = 'SELECT * FROM cadastro_Cursos'

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query: ", err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        res.render('relatorioCurso', { data: results })
    })
})

app.get("/relatorioInstrutor", (req, res) => {
    const query = 'SELECT * FROM cadastro_Instrutores'

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query: ", err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        res.render('relatorioInstrutor', { data: results })
    })
})

app.get("/relatorioSala", (req, res) => {
    const query = 'SELECT * FROM cadastro_Salas'

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query: ", err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        res.render('relatorioSala', { data: results })
    })
})

app.get("/relatorioTurma", (req, res) => {

    const query = "SELECT ct.id_Turma, cc.nomeCurso, ca.nomeAluno, ca.sobrenomeAluno, ci.nomeInstrutor, ci.sobrenomeInstrutor FROM cadastro_Turmas ct INNER JOIN cadastro_Cursos cc ON ct.id_curso = cc.id_curso INNER JOIN cadastro_Alunos ca ON ct.id_aluno = ca.id_aluno INNER JOIN cadastro_Instrutores ci ON ct.id_Instrutor = ci.id_instrutor;"
    
    connection.query(query, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query: ", err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        res.render('relatorioTurma', { data: results })
    })
})

app.get("/relatorioGeral", (req, res) => {

    const sql = 'SELECT * FROM cadastro_Alunos'

    const sql2 = 'SELECT * FROM cadastro_Cursos'

    const sql3 = 'SELECT * FROM cadastro_Instrutores'

    const sql4 = 'SELECT ct.id_Turma, cc.nomeCurso, ca.nomeAluno, ca.sobrenomeAluno, ci.nomeInstrutor, ci.sobrenomeInstrutor FROM cadastro_Turmas ct INNER JOIN cadastro_Cursos cc ON ct.id_curso = cc.id_curso INNER JOIN cadastro_Alunos ca ON ct.id_aluno = ca.id_aluno INNER JOIN cadastro_Instrutores ci ON ct.id_Instrutor = ci.id_instrutor;'

    const sql5 = 'SELECT * FROM cadastro_Salas'

    const sql6 = 'SELECT nomeSala, nomeInstrutor, sobrenomeInstrutor, nomeCurso, localSala, anoMesDia, horaInicial, horaFinal FROM alocacao_De_Salas ads, cadastro_Instrutores ci, cadastro_Cursos cc, cadastro_Salas ca WHERE ads.id_instrutor = ci.id_instrutor AND ads.id_curso = cc.id_curso AND ads.id_Sala = ca.id_Sala;'

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query: ", err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        } else {

            connection.query(sql2, (err, results2) => {
                if (err) {
                    console.error("Erro ao executar a query: ", err.stack)
                    res.status(500).send("Erro ao buscar dados")
                    return
                } else {

                    connection.query(sql3, (err, results3) => {
                        if (err) {
                            console.error("Erro ao executar a query: ", err.stack)
                            res.status(500).send("Erro ao buscar dados")
                            return
                        } else {

                            connection.query(sql4, (err, results4) => {
                                if (err) {
                                    console.error("Erro ao executar a query: ", err.stack)
                                    res.status(500).send("Erro ao buscar dados")
                                    return
                                } else {

                                    connection.query(sql5, (err, results5) => {
                                        if (err) {
                                            console.error("Erro ao executar a query: ", err.stack)
                                            res.status(500).send("Erro ao buscar dados")
                                            return
                                        } else {

                                            connection.query(sql6, (err, results6) => {
                                                if (err) {
                                                    console.error("Erro ao executar a query", err.stack)
                                                    res.status(500).send("Erro ao buscar dados")
                                                    return
                                                } else {
                                                    res.render("relatorioGeral", { data: results, data2: results2, data3: results3, data4: results4, data5: results5, data6: results6 })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })

        }
    })

})

app.get("/alocacaoDeSalas", (req, res) => {

    const sql = 'SELECT * FROM cadastro_Salas'

    const sql2 = 'SELECT * FROM cadastro_Instrutores'

    const sql3 = 'SELECT * FROM cadastro_Cursos'


    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query: ", err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        connection.query(sql2, (err, results2) => {
            if (err) {
                console.error("Erro ao executar a query: ", err.stack)
                res.status(500).send("Erro ao buscar dados")
                return
            }

            connection.query(sql3, (err, results3) => {
                if (err) {
                    console.error("Erro ao executar a query: ", err.stack)
                    res.status(500).send("Erro ao buscar dados")
                    return
                }

                res.render('alocacaoDeSalas', { data: results, data2: results2, data3: results3 })
            })

        })

    })

})

app.get("/salasAlocadas", (req, res) => {

    const sql = 'SELECT nomeSala, nomeInstrutor, sobrenomeInstrutor, nomeCurso, localSala, anoMesDia, horaInicial, horaFinal FROM alocacao_De_Salas ads, cadastro_Instrutores ci, cadastro_Cursos cc, cadastro_Salas ca WHERE ads.id_instrutor = ci.id_instrutor AND ads.id_curso = cc.id_curso AND ads.id_Sala = ca.id_Sala;'

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query", err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        res.render('salasAlocadas', { data: results })
    })
})

app.get("/erroCadastro",(req,res) => {
    res.render('erroCadastro')
})

app.get('/erroCadastroAluno',(req,res) => {
    res.render('erroCadastroAluno')
})

app.get('/erroCadastroInstrutor',(req,res) => {
    res.render('erroCadastroInstrutor')
})

app.get('/erroLogin',(req,res) => {
    res.render('erroLogin')
})

app.get('/erroAlocacaoSala',(req,res) => {
    res.render('erroAlocacaoSala')
})

app.get('/erroCadastroCurso',(req,res) => {
    res.render('erroCadastroCurso')
})

app.get("/erroCadastroSala",(req,res) => {
    res.render('erroCadastroSala')
})

app.get('/pesquisar',(req,res) => {
    res.render('pesquisar')
})

app.get('/pesquisarInstrutor',(req,res) => {
    res.render('pesquisarInstrutor')
})

app.get('/pesquisarAluno',(req,res) => {
    res.render('pesquisarAluno')
})

app.get('/pesquisarCurso',(req,res) => {
    res.render('pesquisarCurso')
})

app.get('/pesquisarSala',(req,res) => {
    res.render('pesquisarSala')
})

app.get('/pesquisarSalaAlocada',(req,res) => {
    res.render('pesquisarSalaAlocada')
})

app.get('/pesquisarDadosInstrutor/',(req,res) => {
    const nome = req.query.nomeInstrutor

    const sql = `SELECT * FROM cadastro_Instrutores WHERE nomeInstrutor = '${nome}'`

    connection.query(sql,function(err,data){
        if(err){
            console.log(err)
            return
        }else{
            console.log(data)
            
            res.render('pesquisarDadosInstrutor', {instrutor: data})
        }
    })
})

app.get('/pesquisarDadosAluno/',(req,res) => {
    const nome = req.query.nomeAluno

    const sql = `SELECT * FROM cadastro_Alunos WHERE nomeAluno = '${nome}'`

    connection.query(sql,function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data)

            res.render('pesquisarDadosAluno', {aluno: data})
        }
    })
})

app.get('/pesquisarDadosCurso/',(req,res) => {
    const nome = req.query.nomeCurso

    const sql = `SELECT * FROM cadastro_Cursos WHERE nomeCurso = '${nome}'`

    connection.query(sql,function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data)

            res.render('pesquisarDadosCurso', {curso: data})
        }
    })

})

app.get('/pesquisarDadosSala/',(req,res) => {
    const nome = req.query.nomeSala

    const sql = `SELECT * FROM cadastro_Salas WHERE localSala = '${nome}'`

    connection.query(sql,function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data)

            res.render('pesquisarDadosSala', {sala: data})
        }
    })

})

app.get('/pesquisarDadosAlocacao/',(req,res) => {
    const nome = req.query.salaAlocada

    const sql = `SELECT nomeSala, nomeInstrutor, nomeCurso, localSala, anoMesDia, horaInicial, horaFinal FROM alocacao_De_Salas ads, cadastro_Instrutores ci, cadastro_Cursos cc, cadastro_Salas ca WHERE ads.id_instrutor = ci.id_instrutor AND ads.id_curso = cc.id_curso AND ads.id_Sala = ca.id_Sala AND nomeSala = '${nome}'`

    connection.query(sql,function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data)

            res.render('pesquisarDadosAlocacao', {alocacao: data})
        }
    })
})

// Criar conexão com o banco de dados
const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "projeto_integrador"
})

// Rota para cadastrar usuário
app.post("/cadastro", (req, res) => {
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome
    const usuario = req.body.cadastroUsuario
    const email = req.body.email
    const senha = req.body.cadastroSenha

    const sql = `INSERT INTO cadastro(nome, sobrenome, usuario, email, senha) VALUES ('${nome}', '${sobrenome}', '${usuario}', '${email}', '${senha}')`
    console.log(sql)


    connection.query(sql, function (err) {
        if (err) {
            console.log(err)
            res.redirect('erroCadastro')
        } else {
            res.redirect("/")
        }
    })


})

app.post("/", (req, res) => {
    const usuario2 = req.body.loginUsuario
    const senha2 = req.body.loginSenha

    const sql2 = `SELECT * FROM cadastro WHERE usuario = '${usuario2}' AND senha = '${senha2}'`
    console.log(sql2)

    connection.query(sql2, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            const dados = data[0]

            console.log(dados)

            if (dados) {
                res.redirect('menu')
            } else {
                res.redirect('erroLogin')
            }
        }
    })
})

app.post("/cadastroDeCursos", (req, res) => {
    const nome_curso = req.body.nomeCurso
    const descricao_curso = req.body.descricaoCurso

    const sql = `INSERT INTO cadastro_Cursos(nomeCurso, descricaoCurso) VALUES('${nome_curso}', '${descricao_curso}')`

    console.log(sql)

    connection.query(sql, function (err) {
        if (err) {
            console.log(err)
            res.redirect("/erroCadastroCurso")
        } else {
            res.redirect("/menu")
        }
    })
})

app.post("/cadastroDeAlunos", (req, res) => {
    const nome_aluno = req.body.nomeAluno
    const sobrenome_aluno = req.body.sobrenomeAluno
    const email_aluno = req.body.emailAluno
    const telefone_aluno = req.body.telefoneAluno

    const sql = `INSERT INTO cadastro_Alunos(nomeAluno, sobrenomeAluno, emailAluno, telefoneAluno) VALUES('${nome_aluno}', '${sobrenome_aluno}', '${email_aluno}', '${telefone_aluno}')`

    console.log(sql)

    connection.query(sql, function (err) {
        if (err) {
            console.log(err)
             res.redirect('/erroCadastroAluno')
        } else {
            res.redirect("/menu")
        }
    })
})

app.post("/cadastroDeInstrutores", (req, res) => {
    const nome_instrutor = req.body.nomeInstrutor
    const sobrenome_instrutor = req.body.sobrenomeInstrutor
    const email_instrutor = req.body.emailInstrutor
    const telefone_instrutor = req.body.telefoneInstrutor

    const sql = `INSERT INTO cadastro_Instrutores(nomeInstrutor, sobrenomeInstrutor, emailInstrutor, telefoneInstrutor) VALUES('${nome_instrutor}', '${sobrenome_instrutor}', '${email_instrutor}', '${telefone_instrutor}')`

    console.log(sql)

    connection.query(sql, function (err) {
        if (err) {
            console.log(err)
            res.redirect("/erroCadastroInstrutor")
        } else {
            res.redirect("/menu")
        }
    })
})

app.post("/cadastroDeTurmas", (req, res) => {

    const nome_Curso = req.body.nomeCurso
    const nome_Aluno = req.body.nomeAluno 
    const nome_Instrutor = req.body.nomeInstrutor

    const sql = `INSERT INTO cadastro_Turmas(id_curso,id_aluno,id_instrutor) VALUES((SELECT id_curso FROM cadastro_Cursos WHERE nomeCurso = '${nome_Curso}'), (SELECT id_aluno FROM cadastro_Alunos WHERE nomeAluno = '${nome_Aluno}'), (SELECT id_instrutor FROM cadastro_Instrutores WHERE nomeInstrutor = '${nome_Instrutor}'))`

    console.log(sql)

    connection.query(sql, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/menu")
        }
    })
})

app.post("/cadastroDeSalas", (req, res) => {

    const local_Sala = req.body.localSala
    const capacidade_Aluno = req.body.capacidadeAluno
    const computadores = req.body.flexComputadores === 'marcado' ? 1 : 0
    const projetor = req.body.flexProjetor === 'marcado' ? 1 : 0
    const lousa = req.body.flexLousaInterativa === 'marcado' ? 1 : 0
    const material = req.body.flexMaterial === 'marcado' ? 1 : 0
    const radio = req.body.flexRadioCoffee === 'sim' ? 1 : 0

    const sql = `INSERT INTO cadastro_Salas(localSala,capacidadeAlunos,computadores,projetor,lousaInterativa,material,radio) VALUES('${local_Sala}',${capacidade_Aluno},${computadores},${projetor},${lousa},${material},${radio})`

    console.log(sql)

    connection.query(sql, function (err) {
        if (err) {
            console.log(err)
            res.redirect("/erroCadastroSala")
        } else {
            res.redirect("/menu")
        }
    })

})

const validarHoraEData = (req,res,next) => {
    const nomeSala = req.body.nomeSala
    const anoMesDia = req.body.anoMesDia
    const horaInicial = req.body.horaInicial
    const horaFinal = req.body.horaFinal

    const query = `SELECT * FROM alocacao_De_Salas WHERE nomeSala = '${nomeSala}' AND anoMesDia = '${anoMesDia}' AND ((horaInicial < '${horaFinal}' AND horaFinal > '${horaInicial}'))`

    connection.query(query,[nomeSala,anoMesDia,horaInicial,horaFinal],(err,results) => {
        if(err){
            console.log(err)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        if(results.length > 0){
            res.status(400).render('erroAlocacaoSala', {mensagem: "Já existem horários cadastrados para este dia e hora, Por favor volte para a página anterior e escolha outro dia ou horário."})
            return 
        }

        next();
    })
}

app.post('/alocacaoDeSalas', validarHoraEData, (req, res) => {

    const nomeSala = req.body.nomeSala
    const nomeInstrutor = req.body.opcaoInstrutor
    const nomeCurso = req.body.opcaoCurso
    const localSala = req.body.opcaoLocal
    const anoMesDia = req.body.anoMesDia
    const horaInicial = req.body.horaInicial
    const horaFinal = req.body.horaFinal

    const sql = `INSERT INTO alocacao_De_Salas(nomeSala,id_instrutor,id_curso,id_Sala,anoMesDia,horaInicial,horaFinal) VALUES('${nomeSala}',(SELECT id_instrutor FROM cadastro_Instrutores WHERE nomeInstrutor = '${nomeInstrutor}'),(SELECT id_curso FROM cadastro_Cursos WHERE nomeCurso = '${nomeCurso}'),(SELECT id_Sala FROM cadastro_Salas WHERE localSala = '${localSala}'),'${anoMesDia}','${horaInicial}','${horaFinal}')`

    console.log(sql)

    connection.query(sql, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/alocacaoDeSalas")
        }
    })

})

// Execução da conexão
// Será necessário estabelecer a conexão a cada interação com o banco
connection.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Conexão estabelecida com sucesso! Servidor na porta 3015")
        app.listen(3015)
    }
})