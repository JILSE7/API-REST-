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

mongoose.connect(
    "mongodb+srv://beduDB:123.Pass@cluster0.y6kwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

mongoose.set("debug", true);
require("./models/User");
require('./models/Car');
require('./config/passport');
// Aquí se importarán los modelos cuando estén listos

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