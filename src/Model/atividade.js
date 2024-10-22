const conexao = require('../Infraestrutura/conexao')
const session = require('express-session');

module.exports = {
    listarAtividade: (id_Turmas) => {
        const Turmas_id = id_Turmas

        return new Promise((resolve, reject) => {
            conexao.query('SELECT * FROM atividades where Turmas_id = ?', [Turmas_id], (error, result) => {
                if (error) {
                    console.log('Deu erro')
                    reject(error)
                    return;
                }

                console.log(result)
                console.log('Sucesso ao listar Aividade')
                resolve(result)
            })
        })
    },
    createAtividade: (descricao, Turmas_id) => {
        return new Promise((resolve, reject) => {

            conexao.query('INSERT INTO atividades (descricao,Turmas_id) VALUES (?,?)',
                [descricao, Turmas_id],
                (error, result) => {
                    if (error) {

                        reject(error)
                        return;
                    }
                    console.log("Sucesso ao criar Atividades")
                    resolve(result)
                })
        })
    }
}