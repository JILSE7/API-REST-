// /* Clase que representa un automovil en nuestra API */
// class Car {
//     constructor(id, price, make, model, year, miles, drivetrain, chasisType, photos, description, advertiserID) {
//         this.id = id;
//         this.price = price;
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.miles = miles;
//         this.drivetrain = drivetrain;
//         this.chasisType = chasisType;
//         this.photos = photos;
//         this.description = description;
//         this.advertiserID = advertiserID;
//     }
// }

// module.exports = Car;


//models/Car.js
const mongoose = require('mongoose'); //Importando mongoose.
const uniqueValidator = require("mongoose-unique-validator") ////Importando módulo mongoose-unique-validator, pendiente de instalar.
const crypto = require('crypto'); //Importando módulo crypto, pendiente de instalar.
const jwt = require('jsonwebtoken'); //Importando módulo jsonwebtoken, pendiente de instalar.
const secret = require('../config').secret;

const CarSchema = new mongoose.Schema({
    make: {
        type: String,
        unique: false,
        required: [true, "El campo 'Marca' no puede quedar vacío"],
        index: true
    },
    model: {
        type: String,
        required: [true, "El campo 'Modelo' no puede quedar vacío"],
        index: true
    },
    version: {
        type: String,
        required: false,
    },
    year: {
        type: Number,
        min: 1900,
        max: 2021,
        required: [true, "El campo 'Año' no puede quedar vacío"]
    },
    mileage: {
        type: Number,
        required: false
    },
    drivetrain: String,
    chasisType: {
        type: String,
        enum: ['Coupe', 'Sedan', 'Hatchback', 'Roadster', 'Convertible', 'SUV', 'Minivan', 'Sportscar', 'pickup', 'Other'],
        required: false
    },
    color: String,
    photos: [String],
    description: {
        type: String,
        maxLength: 1000
    },
    price: {
        type: Number,
        required: [true, "El campo 'precio' no puede quedar vacío"],
        index: true
    },
    // creationDate: {
    //     type: Date,
    //     default: Date.now
    // },
    advertiserId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }]
}, { timestamps: true });

CarSchema.plugin(require('mongoose-autopopulate'));

CarSchema.methods.publicData = function() {
    return {
        id: this.id,
        make: this.make,
        model: this.model,
        version: this.version,
        year: this.year,
        mileage: this.mileage,
        drivetrain: this.drivetrain,
        chasisType: this.chasisType,
        color: this.color,
        photos: this.photos,
        description: this.description,
        price: this.price,
        // creationDate: this.creationDate,
        advertiserId: this.advertiserId,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
};

mongoose.model("Car", CarSchema);