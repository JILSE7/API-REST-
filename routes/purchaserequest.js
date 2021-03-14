////ROUTES SOLICITUD DE COMPRA
const router = require('express').Router();
const {
    //Importando los controllers
    createPucharseRequest,
    getPucharse,
    getPucharseId,
    updatePucharse,
    deletePucharse
} = require('../controllers/purchaserequest');

//Definiendo las rutas
router.get('/', getPucharse);
router.get('/:id', getPucharseId);
router.post('/', createPucharseRequest);
router.put('/:id', updatePucharse);
router.delete('/:id', deletePucharse);

//Exportando las rutas
module.exports = router;