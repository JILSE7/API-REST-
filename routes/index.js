const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Bienvenido a carbedu-ApI');
});


router.use('/user', require('./user'));

router.use('/c', require('./car'));
router.use('/pr', require('./pucharserequest'));


//EXPORTAMOS NUESTRO ROUTER;
module.exports = router;