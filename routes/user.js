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
    createUser,
    getUser,
    updateUser,
    deleterUser,
    logIn,
    getAllUser
} = require('../controllers/user')
const auth = require('./auth');

router.get('/', getAllUser)
router.get('/:id', auth.requerido, getUser);
router.post('/', createUser)
router.post('/entrar', logIn)
router.put('/:id', auth.requerido, updateUser)
router.delete('/:id', auth.requerido, deleterUser)

module.exports = router;