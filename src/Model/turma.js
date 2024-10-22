const session = require('express-session');
const conexao = require('../Infraestrutura/conexao')

module.exports = {
    verificacao: async (email, senha) => {
        return new Promise((resolve, reject) => {
            //console.log(email, senha);
            conexao.query('SELECT * FROM professor WHERE email = ? and senha = ?', [email,
                senha], (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    if (results.length === 0) {
                        reject(new Error('User not found'));
                        return;
                    }
                    const professor = results[0];
                    //console.log(professor.id_professor);

                    // Store user details in session
                    session.id_professor = professor.id_professor;
                    session.nome = professor.nome;
                    console.log("Sucesso ao entrar !!");
                    //console.log(professor);
                    resolve(professor);
                });
        });
    },

    inserirTurma: (nome) => {
        return new Promise((resolve, reject) => {
            const id_professor = session.id_professor;
            conexao.query('INSERT INTO turmas (codigo, Professor_id) VALUES (?,?)',
                [nome, id_professor],
                (error, results) => {
                    if (error) { reject(error); return; }
                    console.log("Sucesso ao cadastrar turma!!")
                    resolve(results)
                });
        });
    },

    listarTurma: () => {
        return new Promise((resolve, reject) => {
            const id_professor = session.id_professor;
            conexao.query('SELECT * FROM turmas WHERE Professor_id = ?',
                [id_professor],
                (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    console.log("Sucesso ao listar ao turmas!!")
                    resolve(results)
                });
        });
    },

    editar: (id_Turmas) => {
        console.log(id_Turmas)
        return new Promise((resolve, reject) => {
            conexao.query('SELECT * FROM turmas WHERE id_Turmas = ?',
                [id_Turmas],
                (error, results) => {
                    if (error) { reject(error); return; }
                    //console.log(results)
                    resolve(results[0])
                });
        });
    },

    alterar: (id_Turmas, codigo) => {
        return new Promise((resolve, reject) => {
            conexao.query('UPDATE turmas SET codigo = ? WHERE id_Turmas = ?',
                [codigo, id_Turmas], 
                (error, results) => {
                    if (error) { reject(error); return; }
                    console.log("Sucesso ao editar a turma!!")
                    resolve(results)
                });
        });
    },

    delete: (id_Turmas) => {
        return new Promise((resolve, reject) => {
            conexao.query('DELETE FROM turmas WHERE id_Turmas = ?',
                [id_Turmas],
                (error, results) => {
                    if (error) { reject(error); return; }
                    console.log("Sucesso ao excluir a turma!!")
                    resolve(results)
                });
        });
    }
}
