//ROUTES USURIO
const router = require('express').Router();
//Importando los controllers
const {
    createUser,
    getUser,
    updateUser,
    deleterUser,
    logIn,
    getAllUser
} = require('../controllers/user')
const auth = require('./auth');

//Definiendo las rutas
router.get('/', getAllUser)
router.get('/:id', auth.requerido, getUser);
router.post('/', createUser)
router.post('/entrar', logIn)
router.put('/:id', auth.requerido, updateUser)
router.delete('/:id', auth.requerido, deleterUser)

//Exportando las rutas
module.exports = router;