// //CONTROLADOR PARA SOLICITUD DE COMPRA
const mongoose = require('mongoose')
const PucharseRequest = mongoose.model("PucharseRequest")

//Creando una nueva solicitud de compra
function createPucharseRequest(req, res, next) {
    const body = req.body

    const pucharse = new PucharseRequest(body)
    pucharse.save().then(pucharser => {
        console.log(pucharser.purchaserId);
        return res.status(201).json(pucharser.toJSON())
    }).catch(next);
}

//Consultar todas las solicitudes de compra
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

//Consultar una solocitud por Id
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

//Actualizar la solicitud por Id
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

//Eliminar una solicitud por id
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