const Atividade = require('../Model/atividade');
const session = require('express-session');

module.exports = {
    listarAtividade: async (req, res) => {
        let id_Turmas = req.params.id_Turmas
        const atividades = await Atividade.listarAtividade(id_Turmas)
        session.id_Turmas = id_Turmas
        return res.render('../Views/Atividade/mainAtividade', { atividades })
    },

    formAtividade: (_, res) => {
        res.render('Atividade/formAtividade');
    },

    createAtividade: async (req, res) => {
        let descricao = req.body.descricao
        Turmas_id = session.id_Turmas
        console.log('FK --> ', session.id_Turmas)
        await Atividade.createAtividade(descricao, Turmas_id)
        return res.redirect('/atividade/createAtividade/${Turmas_id}')
    },
}