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

app.use(express.urlencoded({ extended: true }));//**************** */
app.use(express.json()) // Para capturar o body em JSON.

app.engine("handlebars", exphbs.engine()) // renderizar o controle do servidor de aplicação para o handlebars
app.set("view engine", "handlebars") // o que estiver na views com extensões handlebars será renderizado

// Liberar o uso de CSS para estilizar os layouts
app.use(express.static("public"))

//Rotas - rota padrão será o home
app.get("/",(req,res) => {
    res.render("home", { css: 'telaDeLogin.css'})
})

app.get("/cadastro",(req,res) => {
    res.render("cadastro", {css: 'telaDeLogin.css'})
})

app.get("/menu",(req,res) => {
    res.render("menu")
})

app.get("/realizarCadastros",(req,res) => {
    res.render("realizarCadastros")
})

app.get("/cadastroDeAlunos",(req,res) =>{
    res.render("cadastroDeAlunos")
})

app.get("/cadastroDeCursos",(req,res) =>{
    res.render("cadastroDeCursos")
})

app.get("/cadastroDeInstrutores",(req,res) => {
    res.render("cadastroDeInstrutores")
})

app.get("/cadastroDeSalas",(req,res) =>{
    res.render("cadastroDeSalas")
})

app.get("/cadastroDeTurmas",(req,res) => {
    const query = 'SELECT nomeCurso, nomeAluno, nomeInstrutor FROM cadastro_Cursos LEFT JOIN cadastro_Alunos ON cadastro_Cursos.id_curso = cadastro_Alunos.id_aluno LEFT JOIN cadastro_Instrutores ON cadastro_Cursos.id_curso = cadastro_Instrutores.id_instrutor'

    console.log(query)

    connection.query(query,(err,results) => {
        if(err){
            console.error("Erro ao executar a query: ",err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        res.render('cadastroDeTurmas', {data: results})
    })

})


app.get("/relatorios",(req,res) => {
    res.render("relatorios")
})

app.get("/relatorioAluno",(req,res) => {
    const query = 'SELECT * FROM cadastro_Alunos'

    connection.query(query,(err,results) => {
        if(err){
            console.error("Erro ao executar a query: ",err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        res.render('relatorioAluno',{ data: results })
    })
})

app.get("/relatorioCurso",(req,res) =>{
    const query = 'SELECT * FROM cadastro_Cursos'

    connection.query(query,(err,results) => {
        if(err){
            console.error("Erro ao executar a query: ",err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }
        
        res.render('relatorioCurso',{ data: results })
    })
})

app.get("/relatorioInstrutor",(req,res) => {
    const query = 'SELECT * FROM cadastro_Instrutores'

    connection.query(query,(err,results) => {
        if(err){
            console.error("Erro ao executar a query: ",err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }
        
        res.render('relatorioInstrutor',{ data: results })
    })
})

//  ****************

app.get("/relatorioSala",(req,res) => {

    const query = "SELECT * FROM cadastro_Salas"

    connection.query(query,(err,results) => {
        if(err){
            console.error("Erro ao executar a query: ",err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        res.render('relatorioSala', { data: results })
    })
})


//  ************


app.get("/relatorioTurma", (req, res) => {

    const query = "SELECT nomeCurso, nomeAluno, nomeInstrutor FROM cadastro_Turmas ct, cadastro_Cursos cc, cadastro_Alunos ca, cadastro_Instrutores ci WHERE ct.id_turma = cc.id_curso AND ct.id_turma = ca.id_aluno AND ct.id_turma = ci.id_instrutor"

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query: ", err.stack)
            res.status(500).send("Erro ao buscar dados")
            return
        }

        res.render('relatorioTurma', { data: results })
    })
})

app.get("/relatorioGeral",(req,res) => {
    res.render("relatorioGeral")
})

app.get("/alocacaoDeSalas",(req,res) =>{
    res.render("alocacaoDeSalas")
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

// Criar conexão com o banco de dados
const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "projeto_integrador"
})

// Rota para cadastrar usuário
app.post("/cadastro",(req,res) => {
    const nomeCompleto = req.body.nomeCompleto
    const usuario = req.body.cadastroUsuario
    const email = req.body.email
    const senha = req.body.cadastroSenha

    const sql = `INSERT INTO cadastro(nome_Completo, usuario, email, senha) VALUES ('${nomeCompleto}', '${usuario}', '${email}', '${senha}')`
    console.log(sql)

    
    connection.query(sql,function(err){
        if(err){
            console.log(err)
            res.redirect('erroCadastro')
        }else{
            res.redirect("/")
        }
    })


})

app.post("/",(req,res) => {
    const usuario2 = req.body.loginUsuario
    const senha2 = req.body.loginSenha

    const sql2 = `SELECT * FROM cadastro WHERE usuario = '${usuario2}' AND senha = '${senha2}'`
    console.log(sql2)

    connection.query(sql2,function(err,data){
        if(err){
            console.log(err)
        }else{
            const dados = data[0]

            console.log(dados)

            if(dados){
                res.redirect('menu')
            }else{
                res.redirect('erroLogin')
            }
        }
    })
})

app.post("/cadastroDeCursos",(req,res) => {
    const nome_curso = req.body.nomeCurso
    const descricao_curso = req.body.descricaoCurso

    const sql = `INSERT INTO cadastro_Cursos(nomeCurso, descricaoCurso) VALUES('${nome_curso}', '${descricao_curso}')`

    console.log(sql)

    connection.query(sql,function(err){
        if(err){
            console.log(err)
        }else{
            res.redirect("/realizarCadastros")
        }
    })
})

app.post("/cadastroDeAlunos",(req,res) => {
    const nome_aluno = req.body.nomeAluno
    const email_aluno = req.body.emailAluno
    const telefone_aluno = req.body.telefoneAluno

    const sql = `INSERT INTO cadastro_Alunos(nomeAluno, emailAluno, telefoneAluno) VALUES('${nome_aluno}', '${email_aluno}', '${telefone_aluno}')`

    console.log(sql)

    connection.query(sql,function(err){
        if(err){
            console.log(err)
            res.redirect("/erroCadastroAluno")
        }else{
            res.redirect("/realizarCadastros")
        }
    })
})

app.post("/cadastroDeInstrutores",(req,res) => {
    const nome_instrutor = req.body.nomeInstrutor
    const email_instrutor = req.body.emailInstrutor
    const telefone_instrutor = req.body.telefoneInstrutor

    const sql = `INSERT INTO cadastro_Instrutores(nomeInstrutor, emailInstrutor, telefoneInstrutor) VALUES('${nome_instrutor}', '${email_instrutor}', '${telefone_instrutor}')`

    console.log(sql)

    connection.query(sql,function(err){
        if(err){
            console.log(err)
            res.redirect("/erroCadastroInstrutor")
        }else{
            res.redirect("/realizarCadastros")
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
            res.redirect("/realizarCadastros")
        }
    })
})


app.post("/cadastroDeSalas", (req, res) => {
    console.log(req.body); 


    const localSala = req.body.localSala;
    const capacidadeAluno = req.body.capacidadeAluno;

    
    const flexComputadores = req.body.flexComputadores ? 1 : 0;
    const flexProjetor = req.body.flexProjetor ? 1 : 0;
    const flexLousaInterativa = req.body.flexLousaInterativa ? 1 : 0;
    const flexMaterial = req.body.flexMaterial ? 1 : 0;

    //capturar o valor dos radio buttons
    const coffee_break = req.body.flexRadioCoffee === 'Sim' ? 'Sim' : 'Não';

    const sql = `
        INSERT INTO cadastro_Salas(localSala, capacidadeAluno, flexComputadores, flexProjetor, flexLousaInterativa, flexMaterial, coffee_break) 
        VALUES('${localSala}', '${capacidadeAluno}', '${flexComputadores}', '${flexProjetor}', '${flexLousaInterativa}', '${flexMaterial}', '${coffee_break}')
    `;

    console.log(sql);

    connection.query(sql, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/cadastroDeSalas");
        }
    });
});

// ***********

// Execução da conexão
// Será necessário estabelecer a conexão a cada interação com o banco
connection.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Conexão estabelecida com sucesso! Servidor na porta 3015")
        app.listen(3015)
    }
})