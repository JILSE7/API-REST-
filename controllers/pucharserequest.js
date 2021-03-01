//CONTROLADOR PARA COMPRADOR

//IMPORTACION DEL MODELO PURCHARSER
const PurchaseRequest = require('../models/Pucharserequest');

const createPR = (req, res) => {
    //INTANCIAMOS UN NUEVO USUARIO UTILIZANDO LA CLASE PURCHARSER
    let PR = new PurchaseRequest(req.body);
    req.status(201).send(PR);
    console.log(PR);
    console.log(req);
};

const getPR = (req, res) => {
    let pr1 = new PurchaseRequest(1214, '17/05/2020', 'Pending', 1214, 1214);
    let pr2 = new PurchaseRequest(1214, '17/05/2020', 'Completed', 1214, 1214);
    console.log({ pr1, pr2 });
    res.send([pr1, pr2]);
}

const updatePR = (req, res) => {
    let pr2 = new PurchaseRequest(1214, '17/05/2020', 'Completed', 1214, 1214);
    let modificaciones = req.body;
    brandon = {...pr2, ...modificaciones };
    res.send(pr2);
}


const deletePR = (req, res) => {
    req.status(200).send(`Solicitud ${req.param.id} eliminada correctamente`);
};


module.exports = {
    createPR,
    getPR,
    updatePR,
    deletePR
}