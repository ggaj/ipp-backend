const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];
const models = require('./models');

//Database
models.sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao MYSQL database:', config.database);
        models.sequelize.sync(); //creates table if they do not already exist
    })
    .catch(err => {
        console.error('Não habilitado a conectar ao MYSQL database:', config.database, err);
    });

//Rotas
// console.log('teste');
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const pequenoGrupoRoute = require('./routes/pequenoGrupoRoute');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/person', personRoute);
app.use('/pequenoGrupo', pequenoGrupoRoute);

module.exports = app;