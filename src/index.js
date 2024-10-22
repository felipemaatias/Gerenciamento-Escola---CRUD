//IMPORTANDO MODULOS DE NODE
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./Router/indexRouter');
const session = require('express-session');
const conexao = require('./Infraestrutura/conexao');

const app = express();

//CONFIGURANDO SERVIDOR
app.use(bodyParser.json());
app.use(express.json());
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configuração da sessão
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

//LOGOUT
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    });
});

app.use(router);

//ESCUTANDO O SERVIDOR
app.listen(8080, () => {
    console.log('Servidor Aberto');
    console.log("http://localhost:8080");
})