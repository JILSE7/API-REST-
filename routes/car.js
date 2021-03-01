const router = require('express').Router();
const {
    createCar,
    getCar,
    updateCar,
    deletCar
} = require('../controllers/car');

router.get('/', getCar);
router.post('/', createCar);
router.put('/:id', updateCar);
router.delete('/:id', deletCar);

module.exports = router;