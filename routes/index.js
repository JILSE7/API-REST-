//ROUTAS DEL PROYECTO
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Bienvenido a carbedu-ApI');
});


//DEFINIENDO LAS RUTAS A NUESTRAS COLECCIONES
router.use('/user', require('./user'));
router.use('/car', require('./car'));
router.use('/purcharse', require('./purchaserequest'));


//EXPORTAMOS NUESTRO ROUTER;
module.exports = router;