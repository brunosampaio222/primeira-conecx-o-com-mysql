const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

// definindo o Handlebars como template engine
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

// Pasta de Arquivos estaticos como CSS, imagens
app.use(express.static("public"))

// Trabalhar com dados no formar Json

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//Rotas
app.get("/", (requisicao, resposta) => {
    resposta.render("home")
})

//Conexão com MySQL
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1020",
    database: "nodemysql",
    port: 3306
})

conn.connect((error) => {
    if (error) {
        console.log(error)
        return
    }

    console.log("Conectado ao MySQL!")

    app.listen(3000, () => {
        console.log("Servidor rodando na Porta 3000!")
    })
})