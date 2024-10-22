const Turma = require('../Model/turma');
const session = require('express-session');

module.exports = {
    autenticacao: async (req, res) => {
        const email = req.body.email;
        const senha = req.body.senha;
        console.log(email, senha)
        try {
            const professor = await Turma.verificacao(email, senha);
            //console.log(professor)
            if (professor) {
                res.redirect('/main');
            } else {
                res.send('Email ou senha incorretos!');
            }
        } catch (error) {
            console.error('Erro na autenticação:', error);
            res.status(500).send('Erro no servidor. Tente novamente mais tarde.');
        }
    },
    main: async (req, res) => {
        if (!session.id_professor) {
            return res.redirect('/');
        }
        const turmas = await Turma.listarTurma();
        res.render('Turma/main', { nome: session.nome , turmas});
    },
}