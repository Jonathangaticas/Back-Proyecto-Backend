
const { isDate, isMoment, ISO_8601 } = require('moment');
const { Schema, model } = require('mongoose');

const alumnoSchema = Schema({
    rut: {
        type: Number,
        require: true,
    },
    nombre: {
        type: String,
        require: true,
    },
    apellido: {
        type: String,
        require: true,
    },
    edad: {
        type: Number,
        require: true,
    },
    fechaNacimiento: {
        type: String,
        require: true,
    },
    correo: {
        type: String,
        require: true,
    },
    domicilio:{
        type: String,
        require: true,
    },
    ciudad: {
        type: String,
        require: true,
    },
    fecha: {
        type: String,
        require: true,
    },
    pago: {
        type: Number,
        require: true,
    },
    valorUf: {
        type: Number,
        require: true,
    },
    curso: {
        type: String,
        require: true
    }
})
const AlumnoModel = model("alumnos", alumnoSchema)

module.exports = AlumnoModel;