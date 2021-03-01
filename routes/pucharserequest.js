const router = require('express').Router();
const {
    createPR,
    getPR,
    updatePR,
    deletePR
} = require('../controllers/pucharserequest');

router.get('/', getPR);
router.post('/', createPR);
router.put('/:id', updatePR);
router.delete('/:id', deletePR);

module.exports = router;