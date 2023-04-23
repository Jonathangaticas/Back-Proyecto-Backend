const express = require('express');
const alumnosRoutes = express.Router();
const validateCreate = require('../utils/validator');
const checkRutAlumno = require('../utils/middleware');
const checkRutAlumnoExists = require('../utils/middlewarePost');

const { getAllAlumnosController, addAlumnoController, updateAlumnoController, deleteAlumnoController, getAlumnoByIdController } = require('../controller/alumnoController');
const getUfController = require('../controller/getUfController');


alumnosRoutes.get('/alumno/:rut', checkRutAlumno, getAlumnoByIdController)
alumnosRoutes.get('/alumnos', getAllAlumnosController);
alumnosRoutes.post('/alumno', checkRutAlumnoExists,  validateCreate, addAlumnoController);
alumnosRoutes.put('/alumno/:rut', checkRutAlumno, validateCreate, updateAlumnoController);
alumnosRoutes.delete('/alumno/:rut', checkRutAlumno, deleteAlumnoController);
alumnosRoutes.get('/uf', getUfController);


module.exports = alumnosRoutes;
