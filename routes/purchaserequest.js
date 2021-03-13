const router = require('express').Router();
const {
    createPucharseRequest,
    getPucharse,
    getPucharseId,
    updatePucharse,
    deletePucharse
} = require('../controllers/purchaserequest');

router.get('/', getPucharse);
router.get('/:id', getPucharseId);
router.post('/', createPucharseRequest);
router.put('/:id', updatePucharse);
router.delete('/:id', deletePucharse);

module.exports = router;