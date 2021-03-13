//CONTROLADOR PARA COMPRADOR

//IMPORTACION DEL MODELO PURCHARSER
// const Car = require('../models/Car');

// const createCar = (req, res) => {
//     //INTANCIAMOS UN NUEVO USUARIO UTILIZANDO LA CLASE PURCHARSER
//     let car = new Car(req.body);
//     req.status(201).send(car);
//     console.log(car);
//     console.log(req);
// };

// const getCar = (req, res) => {
//     let bmwI8 = new Car(1214, 40000, 'BWM', 'i8', 2021, 12000, null, 'Sedan', 'https://www.google.com.mx/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fbmw-i8-coupe-2019-1600-02-1579192194.jpg%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa30548712%2Fbmw-i8-adios%2F&tbnid=zCuJQV0110bOGM&vet=12ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ..i&docid=GhR9kXcvw8XSbM&w=1200&h=600&q=bmw%20i8&ved=2ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ', 'BMW JAMAS USADO NENI', null, null)
//     let bmwI9 = new Car(1214, 40000, 'BWM', 'i8', 2021, 12000, null, 'Sedan', 'https://www.google.com.mx/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fbmw-i8-coupe-2019-1600-02-1579192194.jpg%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa30548712%2Fbmw-i8-adios%2F&tbnid=zCuJQV0110bOGM&vet=12ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ..i&docid=GhR9kXcvw8XSbM&w=1200&h=600&q=bmw%20i8&ved=2ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ', 'BMW JAMAS USADO NENI', null, null)
//     let bmwI10 = new Car(1214, 40000, 'BWM', 'i8', 2021, 12000, null, 'Sedan', 'https://www.google.com.mx/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fbmw-i8-coupe-2019-1600-02-1579192194.jpg%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa30548712%2Fbmw-i8-adios%2F&tbnid=zCuJQV0110bOGM&vet=12ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ..i&docid=GhR9kXcvw8XSbM&w=1200&h=600&q=bmw%20i8&ved=2ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ', 'BMW JAMAS USADO NENI', null, null)
//     console.log({ bmwI8, bmwI9, bmwI10 });
//     res.send([bmwI8, bmwI9, bmwI10]);
// }

// const updateCar = (req, res) => {
//     let bmwI9 = new Car(1214, 40000, 'BWM', 'i8', 2021, 12000, null, 'Sedan', 'https://www.google.com.mx/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fbmw-i8-coupe-2019-1600-02-1579192194.jpg%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa30548712%2Fbmw-i8-adios%2F&tbnid=zCuJQV0110bOGM&vet=12ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ..i&docid=GhR9kXcvw8XSbM&w=1200&h=600&q=bmw%20i8&ved=2ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ', 'BMW JAMAS USADO NENI')
//     let modificaciones = req.body;
//     brandon = {...bmwI9, ...modificaciones };
//     res.send(bmwI9);
// }


// const deletCar = (req, res) => {
//     req.status(200).send(`Usuario ${req.param.id} eliminado correctamente`);
// };


// module.exports = {
//     createCar,
//     getCar,
//     updateCar,
//     deletCar
// }


//controllers/car.js
const mongoose = require('mongoose')
const Car = mongoose.model("Car")


function createCar(req, res, next) {
    const body = req.body

    const car = new Car(body)
    car.save().then(auto => {
        console.log(auto);
        return res.status(201).json(auto.toJSON())
    }).catch(next);
}

function getCars(req, res, next) {
    if (req.params.id) {
        Car.findById(req.params.id)
            .populate({ path: 'advertiserId', select: 'username firstName lastName email profilePhoto', model: 'Usuario' })
            .then(respuesta => {
                res.send(respuesta)
            })
            .catch(next)
    } else {
        Car.find()
            .populate({ path: 'advertiserId', select: 'username firstName lastName email profilePhoto', model: 'Usuario' })
            .then(autos => {

                res.send(autos)
            }).catch(next)
    }
}

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