const mysql = require("mysql")
const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bd_escola"
})

module.exports = conexao