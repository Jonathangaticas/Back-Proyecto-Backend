const alumnosModel = require('../models/alumnos.models');

const checkRutAlumnoExists = async(req, res, next) => {
    try {
        const { rut } = req.body;
        const alumno = await alumnosModel.findOne({rut : rut});
        if (alumno) {
            res.send({statusCode: 404, message: "Rut del alumno ya existente"});
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = checkRutAlumnoExists;