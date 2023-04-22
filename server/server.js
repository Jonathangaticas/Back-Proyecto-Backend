const express = require('express');
const alumnosRoutes = require('../routes/alumnosRoutes');
const server = express();

server.use(express.json());//Middleware para devoler json

server.get('/', (_, res) => {
    res.send('Servidor corriendo');
})

server.use('/api', alumnosRoutes)

module.exports =  server; 