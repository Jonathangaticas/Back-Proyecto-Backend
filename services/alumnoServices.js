const AlumnoModel = require('../models/alumnos.models');

//Retorna Alumno por rut
const getAlumnoByIdServices = async(req, res) => {
        const { rut } = req.params;
        const getAlumno = await AlumnoModel.findOne({rut : rut});
        return getAlumno;
}

//Retorna todos los alumnos
const getAllAlumnosServices = async(req) => {
    return await AlumnoModel.find(req);
}

//Agrega Alumnos Matriculados
const addAlumnoServices = async (req) => {
    try {
        const alumno = req.body;
        const newAlumno = new AlumnoModel(alumno)
        await newAlumno.save();
        return { message: "Alumno Matriculado", statusCode: 201 };
    } catch (error) {
        return { message : "Alumno no matriculado", statusCode: 400 };
    }
}

//Modifica Alumnos Matriculados

const updateAlumnoServices = async (req, res) => {
    try {
        const { rut } = req.params;
        const updateAlumno = req.body;
        const alumno = await AlumnoModel.findOne({rut : rut});
        alumno.nombre = updateAlumno.nombre
        alumno.apellido = updateAlumno.apellido
        alumno.edad = updateAlumno.edad
        alumno.fechaNacimiento = updateAlumno.fechaNacimiento
        alumno.correo = updateAlumno.correo
        alumno.domicilio = updateAlumno.domicilio
        alumno.ciudad = updateAlumno.ciudad
        alumno.fecha = updateAlumno.fecha
        alumno.pago = updateAlumno.pago
        alumno.curso = updateAlumno.curso
        await alumno.save();
        return { message: "Informacion de alumno modificada"}
    } catch (error) {
        return { message: "Alumno no pudo ser modificado"}
        
    }
}
//Elimina alumno matriculado
const deleteAlumnoServices =  async(req, res) => {
    try {
        const { rut } = req.params;
        const deleteALumno = await AlumnoModel.deleteOne({ rut : rut});
        return { message: "Alumno Eliminado"}
    } catch (error) {
        return { message: "Alumno no pudo ser eliminado"}
    }
}


module.exports =  { getAlumnoByIdServices, getAllAlumnosServices, addAlumnoServices, updateAlumnoServices, deleteAlumnoServices };