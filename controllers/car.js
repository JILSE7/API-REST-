//CONTROLADOR PARA CARRO
const mongoose = require('mongoose')
const Car = mongoose.model("Car")

//Creando un nuevo auto
function createCar(req, res, next) {
    const body = req.body

    const car = new Car(body)
    car.save().then(auto => {
        console.log(auto);
        return res.status(201).json(auto.toJSON())
    }).catch(next);
}

//Obteniendo todos los autos
function getCars(req, res, next) {
    if (req.params.id) {
        Car.findById(req.params.id)
            .populate({ path: 'advertiserId', select: 'username firstName lastName email profilePhoto phone location', model: 'Usuario' })
            .then(respuesta => {
                res.send(respuesta)
            })
            .catch(next)
    } else {
        Car.find()
            .populate({ path: 'advertiserId', select: 'username firstName lastName email profilePhoto phone location', model: 'Usuario' })
            .then(autos => {

                res.send(autos)
            }).catch(next)
    }
}

//Actializando los datos del auto
function updateCar(req, res, next) {
    console.log(req.car);
    Car.findById(req.params.id).then(auto => {
        if (!auto) { return res.sendStatus(401) }
        let newInfo = req.body
        if (newInfo.make !== 'undefined')
            auto.make = newInfo.make
        if (newInfo.model !== 'undefined')
            auto.model = newInfo.model
        if (newInfo.version !== 'undefined')
            auto.version = newInfo.version
        if (newInfo.year !== 'undefined')
            auto.year = newInfo.year
        if (newInfo.mileage !== 'undefined')
            auto.mileage = newInfo.mileage
        if (newInfo.drivetrain !== 'undefined')
            auto.drivetrain = newInfo.drivetrain
        if (newInfo.chasisType !== 'undefined')
            auto.chasisType = newInfo.chasisType
        if (newInfo.color !== 'undefined')
            auto.color = newInfo.color
        if (newInfo.photos !== 'undefined')
            auto.photos = newInfo.photos
        if (newInfo.description !== 'undefined')
            auto.description = newInfo.description
        if (newInfo.price !== 'undefined')
            auto.price = newInfo.price
            // if(newInfo.creationDate !== 'undefined')
            //     auto.creationDate = newInfo.creationDate
        if (newInfo.advertiserId !== 'undefined')
            auto.advertiserId = newInfo.advertiserId
        auto.save().then(updatedAuto => {
            res.status(201).json(updatedAuto.publicData())
        }).catch(next)
    }).catch(next)
}

//Eliminando auto
function deleteCar(req, res) {
    console.log('hola', req.params.id);
    Car.findOneAndDelete({ _id: req.params.id }).then(data => {
        res.status(200).send(`Car ${req.params.id} deleted: ${data}`);
    })

}

module.exports = {
    createCar,
    getCars,
    updateCar,
    deleteCar
}