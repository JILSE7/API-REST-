//ROUTES USURIO
const router = require('express').Router();
//Importando los controllers
const {
    createCar,
    getCars,
    updateCar,
    deleteCar
} = require('../controllers/car');

//Definiendo las rutas
router.get('/', getCars);
router.get('/:id', getCars)
router.post('/', createCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

module.exports = router;