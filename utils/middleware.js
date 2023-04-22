const alumnosModel = require('../models/alumnos.models');

const checkRutAlumno = async(req, res, next) => {
    try {
        const { rut } = req.params;
        const alumno = await alumnosModel.findOne({rut : rut});
        if (alumno) {
            next();
        } else {
            res.send({statusCode: 404, message: "No existe el alumno con ese rut"})

        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = checkRutAlumno;