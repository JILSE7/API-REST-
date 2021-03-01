const router = require('express').Router();
const {
    createUser,
    getUser,
    updateUser,
    deletUser
} = require('../controllers/user');

router.get('/', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deletUser);

module.exports = router;