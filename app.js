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