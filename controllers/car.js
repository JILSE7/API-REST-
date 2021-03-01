//CONTROLADOR PARA COMPRADOR

//IMPORTACION DEL MODELO PURCHARSER
const Car = require('../models/Car');

const createCar = (req, res) => {
    //INTANCIAMOS UN NUEVO USUARIO UTILIZANDO LA CLASE PURCHARSER
    let car = new Car(req.body);
    req.status(201).send(car);
    console.log(car);
    console.log(req);
};

const getCar = (req, res) => {
    let bmwI8 = new Car(1214, 40000, 'BWM', 'i8', 2021, 12000, null, 'Sedan', 'https://www.google.com.mx/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fbmw-i8-coupe-2019-1600-02-1579192194.jpg%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa30548712%2Fbmw-i8-adios%2F&tbnid=zCuJQV0110bOGM&vet=12ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ..i&docid=GhR9kXcvw8XSbM&w=1200&h=600&q=bmw%20i8&ved=2ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ', 'BMW JAMAS USADO NENI', null, null)
    let bmwI9 = new Car(1214, 40000, 'BWM', 'i8', 2021, 12000, null, 'Sedan', 'https://www.google.com.mx/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fbmw-i8-coupe-2019-1600-02-1579192194.jpg%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa30548712%2Fbmw-i8-adios%2F&tbnid=zCuJQV0110bOGM&vet=12ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ..i&docid=GhR9kXcvw8XSbM&w=1200&h=600&q=bmw%20i8&ved=2ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ', 'BMW JAMAS USADO NENI', null, null)
    let bmwI10 = new Car(1214, 40000, 'BWM', 'i8', 2021, 12000, null, 'Sedan', 'https://www.google.com.mx/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fbmw-i8-coupe-2019-1600-02-1579192194.jpg%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa30548712%2Fbmw-i8-adios%2F&tbnid=zCuJQV0110bOGM&vet=12ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ..i&docid=GhR9kXcvw8XSbM&w=1200&h=600&q=bmw%20i8&ved=2ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ', 'BMW JAMAS USADO NENI', null, null)
    console.log({ bmwI8, bmwI9, bmwI10 });
    res.send([bmwI8, bmwI9, bmwI10]);
}

const updateCar = (req, res) => {
    let bmwI9 = new Car(1214, 40000, 'BWM', 'i8', 2021, 12000, null, 'Sedan', 'https://www.google.com.mx/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fbmw-i8-coupe-2019-1600-02-1579192194.jpg%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa30548712%2Fbmw-i8-adios%2F&tbnid=zCuJQV0110bOGM&vet=12ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ..i&docid=GhR9kXcvw8XSbM&w=1200&h=600&q=bmw%20i8&ved=2ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ', 'BMW JAMAS USADO NENI')
    let modificaciones = req.body;
    brandon = {...bmwI9, ...modificaciones };
    res.send(bmwI9);
}


const deletCar = (req, res) => {
    req.status(200).send(`Usuario ${req.param.id} eliminado correctamente`);
};


module.exports = {
    createCar,
    getCar,
    updateCar,
    deletCar
}