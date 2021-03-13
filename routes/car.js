// const router = require('express').Router();
// const {
//     createCar,
//     getCar,
//     updateCar,
//     deletCar
// } = require('../controllers/car');

// router.get('/', getCar);
// router.post('/', createCar);
// router.put('/:id', updateCar);
// router.delete('/:id', deletCar);

// module.exports = router;


const router = require('express').Router();
const {
    createCar,
    getCars,
    updateCar,
    deleteCar
} = require('../controllers/car');

router.get('/', getCars);
router.get('/:id', getCars)
router.post('/', createCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

module.exports = router;