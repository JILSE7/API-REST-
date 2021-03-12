// //CONTROLADOR PARA COMPRADOR

// //IMPORTACION DEL MODELO PURCHARSER
// const User = require('../models/User');

// const createUser = (req, res) => {
//     //INTANCIAMOS UN NUEVO USUARIO UTILIZANDO LA CLASE PURCHARSER
//     let purcharser = new User(req.body);
//     req.status(201).send(usuario);
//     console.log(purcharser);
//     console.log(req);
// };

// const getUser = (req, res) => {
//     let antonio = new User(1, 'Jose Antonio', 'Millan', 5547445412, 'joseantonio@bedu.com', 'Bedu1', 'Av. Paseo de la Reforma, Juárez, Cuauhtémoc, 06500 Ciudad de México, CDMX', null, 'https://lh5.googleusercontent.com/p/AF1QipNCKtX7g_qaXyQY2jUMCzpffyfSg5BD5SaCziHa=w408-h510-k-no')
//     let said = new User(2, 'Said', 'Mandujano', 557845487, 'saidmandujano@bedu.com', 'Bedu2', 'Miguel Hidalgo, Ciudad de México, CDMX', null, 'https://lh5.googleusercontent.com/p/AF1QipOtsojGOvbJPmiBTauT1Ku3Yf1Ztt2vntEiqOaM=w408-h320-k-no');
//     let brandon = new User(1, 'Brandon', 'Alberto', 457445412, 'brandon@bedu.com', 'Bedu3', '55800 San Juan Teotihuacan de Arista, Méx.', null, 'https://lh5.googleusercontent.com/p/AF1QipNCKtX7g_qaXyQY2jUMCzpffyfSg5BD5SaCziHa=w408-h510-k-no')
//     console.log({ antonio, said, brandon });
//     res.send([antonio, said, brandon]);
// }

// const updateUser = (req, res) => {
//     let brandon = new User(req.params.id, 'Brandon', 'Alberto', 457445412, 'brandon@bedu.com', 'Bedu3', '55800 San Juan Teotihuacan de Arista, Méx.', null, 'https://lh5.googleusercontent.com/p/AF1QipNCKtX7g_qaXyQY2jUMCzpffyfSg5BD5SaCziHa=w408-h510-k-no');
//     let modificaciones = req.body;
//     brandon = {...brandon, ...modificaciones };
//     res.send(brandon);
// }


// const deletUser = (req, res) => {
//     req.status(200).send(`Usuario ${req.param.id} eliminado correctamente`);
// };


// module.exports = {
//     createUser,
//     getUser,
//     updateUser,
//     deletUser
// }


// controllers/usuarios.js
const mongoose = require("mongoose")
const Usuario = mongoose.model("Usuario")
const passport = require('passport');

function crearUsuario(req, res, next) {
    // Instanciaremos un nuevo usuario utilizando la clase usuario
    const body = req.body,
        password = body.password

    delete body.password
    const usuario = new Usuario(body)
    usuario.crearPassword(password)
    usuario.save().then(user => { //Guardando nuevo usuario en MongoDB.
        return res.status(201).json(user.toAuthJSON())
    }).catch(next)
}



function obtenerTodos(req, res, next) {
    Usuario.find(req.usuario, (err, user) => {
        if (!user || err) {
            return res.sendStatus(401);
        }
        console.log('hola general');
        return res.json(user);
    }).catch(next)
}


function obtenerUsuarios(req, res, next) { //Obteniendo usuario desde MongoDB.
    Usuario.findById(req.usuario.id, (err, user) => {
        if (!user || err) {
            return res.sendStatus(401)
        }
        return res.json(user.publicData());
    }).catch(next);
}

function modificarUsuario(req, res, next) {
    console.log(req.usuario)
    Usuario.findById(req.usuario.id).then(user => {
        if (!user) { return res.sendStatus(401); }
        let nuevaInfo = req.body
        if (typeof nuevaInfo.username !== 'undefined')
            user.username = nuevaInfo.username
        if (typeof nuevaInfo.firstName !== 'undefined')
            user.firstName = nuevaInfo.firstName
        if (typeof nuevaInfo.lastName !== 'undefined')
            user.lastName = nuevaInfo.lastName
        if (typeof nuevaInfo.bio !== 'undefined')
            user.bio = nuevaInfo.bio
        if (typeof nuevaInfo.profilePhoto !== 'undefined')
            user.profilePhoto = nuevaInfo.profilePhoto
        if (typeof nuevaInfo.location !== 'undefined')
            user.location = nuevaInfo.location
        if (typeof nuevaInfo.phone !== 'undefined')
            user.phone = nuevaInfo.phone
        if (typeof nuevaInfo.password !== 'undefined')
            user.crearPassword(nuevaInfo.password)
        user.save().then(updatedUser => { //Guardando usuario modificado en MongoDB.
            res.status(201).json(updatedUser.publicData())
        }).catch(next)
    }).catch(next)
}

/*

id: this.id,
        username: this.username,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        bio: this.bio,
        profilePhoto: this.profilePhoto,
        typeOfUser: this.typeOfUser,
        location: this.location,
        phone: this.phone,
        purchaseRequestsList: this.purchaseRequestsList,
        announcementList: this.announcementList,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt

*/

function eliminarUsuario(req, res) {
    // únicamente borra a su propio usuario obteniendo el id del token
    Usuario.findOneAndDelete({ _id: req.usuario.id }).then(r => { //Buscando y eliminando usuario en MongoDB.
        res.status(200).send(`Usuario ${req.params.id} eliminado: ${r}`);
    })
}

function iniciarSesion(req, res, next) {
    if (!req.body.email) {
        return res.status(422).json({ errors: { email: "no puede estar vacío" } });
    }

    if (!req.body.password) {
        return res.status(422).json({ errors: { password: "no puede estar vacío" } });
    }

    passport.authenticate('local', { session: false }, function(err, user, info) {
        if (err) { return next(err); }

        if (user) {
            user.token = user.generarJWT();
            return res.json({ user: user.toAuthJSON() });
        } else {
            return res.status(422).json(info);
        }
    })(req, res, next);
}

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario,
    iniciarSesion,
    obtenerTodos
}