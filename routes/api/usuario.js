const router = require('express').Router();
//CONTROLADORES
const usuarioController = require('../../controllers/UsuarioController.js');
const auth = require('../../middlewares/auth.js');
// MIDDLAWARE verifica los permisos asociados al rol

// ruta: '/api/usuario/login'
router.post('/login', usuarioController.login);
// ruta: '/api/usuario/signup'
router.post('/signup', usuarioController.register);
// ruta: '/api/usuario/list'
router.get('/list', auth.verificarAdministrador, usuarioController.encontrarTodos);
// ruta: '/api/usuario/update' Actualiza los datos de la usuario
//router.put('/update', auth.verificarAdministrador, usuarioController.update);

/*
// ruta: '/api/usuario/add'
router.post('/add', auth.verificarAdministrador, usuarioController.add);
// ruta: '/api/usuario/query' Consulta una usuario por Id
router.get('/query', auth.verificarAdministrador, usuarioController.query);
// ruta: '/api/usuario/queryCodigo' Consulta 
router.get('/queryCodigo', auth.verificarAdministrador, usuarioController.queryCodigo);

// ruta: '/api/usuario/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, usuarioController.activate);
// ruta: '/api/usuario/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, usuarioController.deactivate);
*/

module.exports = router;