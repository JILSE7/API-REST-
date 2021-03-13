const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Bienvenido a carbedu-ApI');
});


router.use('/user', require('./user'));

router.use('/car', require('./car'));
router.use('/purcharse', require('./purchaserequest'));


//EXPORTAMOS NUESTRO ROUTER;
module.exports = router;