//CONTROLADOR PARA COMPRADOR

//IMPORTACION DEL MODELO PURCHARSER
const User = require('../models/User');

const createUser = (req, res) => {
    //INTANCIAMOS UN NUEVO USUARIO UTILIZANDO LA CLASE PURCHARSER
    let purcharser = new User(req.body);
    req.status(201).send(usuario);
    console.log(purcharser);
    console.log(req);
};

const getUser = (req, res) => {
    let antonio = new User(1, 'Jose Antonio', 'Millan', 5547445412, 'joseantonio@bedu.com', 'Bedu1', 'Av. Paseo de la Reforma, Juárez, Cuauhtémoc, 06500 Ciudad de México, CDMX', null, 'https://lh5.googleusercontent.com/p/AF1QipNCKtX7g_qaXyQY2jUMCzpffyfSg5BD5SaCziHa=w408-h510-k-no')
    let said = new User(2, 'Said', 'Mandujano', 557845487, 'saidmandujano@bedu.com', 'Bedu2', 'Miguel Hidalgo, Ciudad de México, CDMX', null, 'https://lh5.googleusercontent.com/p/AF1QipOtsojGOvbJPmiBTauT1Ku3Yf1Ztt2vntEiqOaM=w408-h320-k-no');
    let brandon = new User(1, 'Brandon', 'Alberto', 457445412, 'brandon@bedu.com', 'Bedu3', '55800 San Juan Teotihuacan de Arista, Méx.', null, 'https://lh5.googleusercontent.com/p/AF1QipNCKtX7g_qaXyQY2jUMCzpffyfSg5BD5SaCziHa=w408-h510-k-no')
    console.log({ antonio, said, brandon });
    res.send([antonio, said, brandon]);
}

const updateUser = (req, res) => {
    let brandon = new User(req.params.id, 'Brandon', 'Alberto', 457445412, 'brandon@bedu.com', 'Bedu3', '55800 San Juan Teotihuacan de Arista, Méx.', null, 'https://lh5.googleusercontent.com/p/AF1QipNCKtX7g_qaXyQY2jUMCzpffyfSg5BD5SaCziHa=w408-h510-k-no');
    let modificaciones = req.body;
    brandon = {...brandon, ...modificaciones };
    res.send(brandon);
}


const deletUser = (req, res) => {
    req.status(200).send(`Usuario ${req.param.id} eliminado correctamente`);
};


module.exports = {
    createUser,
    getUser,
    updateUser,
    deletUser
}