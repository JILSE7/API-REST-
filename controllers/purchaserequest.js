// //CONTROLADOR PARA COMPRADOR

// //IMPORTACION DEL MODELO PURCHARSER
// const PurchaseRequest = require('../models/PurchaseRequest');

// const createPR = (req, res) => {
//     //INTANCIAMOS UN NUEVO USUARIO UTILIZANDO LA CLASE PURCHARSER
//     let PR = new PurchaseRequest(req.body);
//     req.status(201).send(PR);
//     console.log(PR);
//     console.log(req);
// };

// const getPR = (req, res) => {
//     let pr1 = new PurchaseRequest(1214, '17/05/2020', 'Pending', 1214, 1214);
//     let pr2 = new PurchaseRequest(1214, '17/05/2020', 'Completed', 1214, 1214);
//     console.log({ pr1, pr2 });
//     res.send([pr1, pr2]);
// }

// const updatePR = (req, res) => {
//     let pr2 = new PurchaseRequest(1214, '17/05/2020', 'Completed', 1214, 1214);
//     let modificaciones = req.body;
//     brandon = {...pr2, ...modificaciones };
//     res.send(pr2);
// }


// const deletePR = (req, res) => {
//     req.status(200).send(`Solicitud ${req.param.id} eliminada correctamente`);
// };


// module.exports = {
//     createPR,
//     getPR,
//     updatePR,
//     deletePR
// }



//controllers/car.js
const mongoose = require('mongoose')
const PucharseRequest = mongoose.model("PucharseRequest")


function createPucharseRequest(req, res, next) {
    const body = req.body

    const pucharse = new PucharseRequest(body)
    pucharse.save().then(pucharser => {
        console.log(pucharser.purchaserId);
        return res.status(201).json(pucharser.toJSON())
    }).catch(next);
}

function getPucharse(req, res, next) {
    PucharseRequest.find()
        .populate({ path: 'compradorId', select: 'username firstName lastName email profilePhoto', model: 'Usuario' })
        .populate({ path: 'advertiserId', select: 'username firstName lastName email profilePhoto', model: 'Usuario' })
        .populate({ path: 'carId', model: 'Car' })
        .then(solicitud => {
            console.log(solicitud);
            res.send(solicitud)
        }).catch(next)

}

function getPucharseId(req, res, next) { //Obteniendo usuario desde MongoDB.
    const id = req.params.id;
    console.log('este es el id', id);
    PucharseRequest.findById(id)
        .then(respuesta => {
            if (!respuesta) {
                return res.sendStatus(401)
            }
            return res.json(respuesta);
        }).catch(next);
}

function updatePucharse(req, res, next) {
    console.log(req.pucharse);
    PucharseRequest.findById(req.params.id).then(solicitud => {
        if (!solicitud) { return res.sendStatus(401) }
        let newInfo = req.body
        if (newInfo.status !== 'undefined')
            auto.status = newInfo.status
        if (newInfo.purchaserID !== 'undefined')
            auto.purchaserID = newInfo.purchaserID
        if (newInfo.advertiserId !== 'undefined')
            auto.advertiserId = newInfo.advertiserId
        if (newInfo.carID !== 'undefined')
            auto.carID = newInfo.carID

        solicitud.save().then(updatedSolicitud => {
            res.status(201).json(updatedSolicitud.publicData())
        }).catch(next)
    }).catch(next)
}

function deletePucharse(req, res) {
    console.log('hola', req.params.id);
    PucharseRequest.findOneAndDelete({ _id: req.params.id }).then(solicitud => {
        res.status(200).send(`Car ${req.params.id} deleted: ${solicitud}`);
    })

}

module.exports = {
    createPucharseRequest,
    getPucharse,
    updatePucharse,
    deletePucharse,
    getPucharseId
}