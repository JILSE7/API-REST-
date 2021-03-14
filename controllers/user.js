//CONTROLADOR PARA USUARIO
const mongoose = require("mongoose")
const Usuario = mongoose.model("Usuario")
const passport = require('passport');

//Creando un nuevo usuario
function createUser(req, res, next) {
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


//Obteniendo todos los usuarios
function getAllUser(req, res, next) {
    Usuario.find(req.usuario, (err, user) => {
        if (!user || err) {
            return res.sendStatus(401);
        }
        console.log('hola general');
        return res.json(user);
    }).catch(next)
}

//Obteniendo un usuario por su id
function getUser(req, res, next) { //Obteniendo usuario desde MongoDB.
    Usuario.findById(req.usuario.id, (err, user) => {
        if (!user || err) {
            return res.sendStatus(401)
        }
        return res.json(user.publicData());
    }).catch(next);
}

//Actualizar usuario por id
function updateUser(req, res, next) {
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

function deleterUser(req, res) {
    // únicamente borra a su propio usuario obteniendo el id del token
    Usuario.findOneAndDelete({ _id: req.usuario.id })
        .then(r => { //Buscando y eliminando usuario en MongoDB.
            console.log(r);
            res.status(200).send(`Usuario con id ${req.params.id} con nombre ${r.username} eliminado`);
        }).catch(res.status(422).json({ errors: `Usuario ${req.params.id} no encontrado` }));
}

function logIn(req, res, next) {
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
    createUser,
    getUser,
    updateUser,
    deleterUser,
    logIn,
    getAllUser
}