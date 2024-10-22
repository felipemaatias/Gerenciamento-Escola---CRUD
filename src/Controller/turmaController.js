const Turma = require('../Model/turma');
const session = require('express-session');


module.exports = {
    form: (_, res) => {
        res.render('./Turma/formTurma');
    },

    createTurma: async (req, res) => {
        let nome = req.body.nome;
        await Turma.inserirTurma(nome);
        return res.redirect('/main');
    },

    alterarTurma: async (req, res) => {
        let id_Turmas = req.params.id_Turmas
        let codigo = req.body.codigo
        //console.log(id_turma)
        await Turma.alterar(id_Turmas, codigo)
        return res.redirect('/main')
    },

    editarTurma: async (req, res) => {
        let id_Turmas = req.body.id_Turmas
        console.log(id_Turmas)
        return res.redirect('/main')
    },

    editarTurma: async (req, res) => {
        let id_Turmas = req.params.id_Turmas
        const turma = await Turma.editar(id_Turmas)
        //console.log(turma)
        res.render('./Turma/formEditarTurma', { turma })
    },

    apagarTurma: async (req, res) => {
        let id_Turmas = req.params.id_Turmas
        await Turma.delete(id_Turmas)
        return res.redirect('/main')
    }
}


