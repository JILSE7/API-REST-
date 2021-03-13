// /* Clase que representa una petición de compra de un auto */

// class PurchaseRequest {
//     constructor(id, creationDate, status, purchaserID, carID) {
//             this.id = id;
//             this.creationDate = creationDate;
//             this.status = status;
//             this.purchaserID = purchaserID;
//             this.carID = carID;
//     }
// }

// module.exports = PurchaseRequest;


// Usuario.js
const mongoose = require('mongoose'); //Importando mongoose.
const uniqueValidator = require("mongoose-unique-validator") ////Importando módulo mongoose-unique-validator, pendiente de instalar.
const crypto = require('crypto'); //Importando módulo crypto, pendiente de instalar.
const jwt = require('jsonwebtoken'); //Importando módulo jsonwebtoken, pendiente de instalar.
const secret = require('../config').secret;


//Definiendo el objeto UsuarioSchema con el constructor Schema.
//Definiendo cada campo con su respectivo tipo de dato.
const PucharserRequestSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['done', 'in-deal', 'deal-canceled'],
        unique: false,
        lowercase: true,
        required: true,
        index: true,
    },
    compradorId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    }],
    advertiserId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    }],
    carId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true,
    }]


}, { timestamps: true });

// usando plugin de validación para que no se repitan correos ni usernames
PucharserRequestSchema.plugin(uniqueValidator, { message: "Ya existe" });



/* * Devuelve la representación de un usuario, sólo datos públicos
 */
PucharserRequestSchema.methods.publicData = function() {
    return {
        id: this.id,
        status: this.status,
        advertiserId: this.coca,
        compradorId: this.compradorId,
        carId: this.carId,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,

    };
};

mongoose.model("PucharseRequest", PucharserRequestSchema);