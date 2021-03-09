// const router = require('express').Router();
// const {
//     createUser,
//     getUser,
//     updateUser,
//     deletUser
// } = require('../controllers/user');

// router.get('/', getUser);
// router.post('/', createUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deletUser);

// module.exports = router;

const router = require('express').Router();
const {
    crearUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario,
    iniciarSesion
} = require('../controllers/user')
const auth = require('./auth');

router.get('/', auth.requerido, obtenerUsuarios)
router.get('/:id', auth.requerido, obtenerUsuarios);
router.post('/', crearUsuario)
router.post('/entrar', iniciarSesion)
router.put('/:id', auth.requerido, modificarUsuario)
router.delete('/:id', auth.requerido, eliminarUsuario)

module.exports = router;