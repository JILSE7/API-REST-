//IMPORTAMOS LAS BIBLIOTECAS NECESARIAS
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// OBJETO GLOBAL DE LA APP
let app = express();

//CONFIGURACION DE MIDDLEWARES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");

var isProduction = process.env.NODE_ENV === 'production';

mongoose.connect(
    process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const errorhandler = require('errorhandler')
if (!isProduction) {
    mongoose.set('debug', true)
    app.use(errorhandler())
        // imprimirá los errores en development
    app.use(function(err, req, res, next) {
        console.log(err.stack);
        res.status(err.status || 500);
        res.json({
            'errors': {
                message: err.message,
                error: err
            }
        })
    })
}

require("./models/User");
require("./models/Car");
require("./models/PurchaseRequest");
require('./config/passport');
// Aquí se importarán los modelos Mascota y Solicitud cuando estén listos

/*********************** Mongoose Configuration *******************************/


//ROUTER (ROUTER/INDEX.JS)
app.use('/v1', require('./routes'));
//ERRORES 404
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})

//INICIANDO EL SERVIDOR
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Puerto ${server.address().port}`);
});