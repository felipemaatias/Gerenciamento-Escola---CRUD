const {Router} = require('express');
const router = Router();

const homeController = require('../Controller/homeController');
const loginController = require('../Controller/loginController');
const turmaController = require('../Controller/turmaController');
const atividadeController = require('../Controller/atividadeController');

//ROTAS DE TURMAS
router.get('/',homeController.home);
router.post('/login', loginController.autenticacao);
router.get('/main', loginController.main);
router.get('/turma/form', turmaController.form);
router.post('/turma/createTurma', turmaController.createTurma)

router.get('/turma/editar/:id_Turmas', turmaController.editarTurma)
router.post('/turma/alterar/:id_Turmas', turmaController.alterarTurma)
router.get('/turma/deletar/:id_Turmas', turmaController.apagarTurma)

//ROTA DE ATIVIDADES 
router.get('/atividade/:id_Turmas', atividadeController.listarAtividade)
router.get('/atividade/formAtividade', atividadeController.formAtividade)
router.post('/atividade/createAtividade', atividadeController.createAtividade)


module.exports = router