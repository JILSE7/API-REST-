/* Clase que representa un anuciante de algun automovil en nuestra API */
// class User {

//     constructor(id, username, firstName, lastName, typeOfUser, phone, email, password, location, bio, profilePhoto, announcementList, purchaseRequestsList) {
//             this.id = id;
//             this.username = username;
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.typeOfUser = typeOfUser;
//             this.phone = phone;
//             this.email = email;
//             this.password = password;
//             this.location = location;
//             this.bio = bio;
//             this.profilePhoto = profilePhoto;
//             this.announcementList = announcementList;
//             this.purchaseRequestsList = purchaseRequestsList;
//     }
// }

// module.exports = User;


// Usuario.js
const mongoose = require('mongoose'); //Importando mongoose.
const uniqueValidator = require("mongoose-unique-validator") ////Importando módulo mongoose-unique-validator, pendiente de instalar.
const crypto = require('crypto'); //Importando módulo crypto, pendiente de instalar.
const jwt = require('jsonwebtoken'); //Importando módulo jsonwebtoken, pendiente de instalar.
const secret = require('../config').secret;


//Definiendo el objeto UsuarioSchema con el constructor Schema.
//Definiendo cada campo con su respectivo tipo de dato.
const UsuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "no puede estar vacío"],
        match: [/^[a-zA-Z0-9]+$/, "es inválido"],
        index: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    typeOfUser: { type: String, enum: ['normal', 'anunciante'] },
    phone: {
        type: String,
        require: [true, 'no puede estar vacio']
    },
    email: {
        type: String,
        unique: true, //este campo no se puede repetir
        lowercase: true,
        required: [true, "no puede estar vacío"],
        match: [/\S+@\S+\.\S+/, "es inválido"],
        index: true,
    },
    location: String,
    bio: String,
    profilePhoto: String,
    announcementList: String,
    purchaseRequestsList: String,
    hash: String, //este campo se utilizará para la sesión
    salt: String, //este campo se utilizará para la sesión

}, { timestamps: true });

// usando plugin de validación para que no se repitan correos ni usernames
UsuarioSchema.plugin(uniqueValidator, { message: "Ya existe" });



UsuarioSchema.methods.crearPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString("hex"); // generando una "sal" random para cada usuario
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
        .toString("hex"); // generando un hash utilizando la sal
};

/**
 * Recibe el password, genera y compara el has con el de la base de datos
 */
UsuarioSchema.methods.validarPassword = function(password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
        .toString("hex");
    return this.hash === hash;
};

UsuarioSchema.methods.generarJWT = function() {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60); // 60 días antes de expirar

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};

/**
 * Devuelve la representación de un usuario después de autenticar
 */
UsuarioSchema.methods.toAuthJSON = function() {
    return {
        username: this.username,
        email: this.email,
        token: this.generarJWT()
    };
};



/**
 * Devuelve la representación de un usuario, sólo datos públicos
 */
UsuarioSchema.methods.publicData = function() {
    return {
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
        updatedAt: this.updatedAt,
        token: this.token
    };
};

mongoose.model("Usuario", UsuarioSchema);





//Define el modelo Usuario, utilizando el esquema UsuarioSchema.
mongoose.model("Usuario", UsuarioSchema)