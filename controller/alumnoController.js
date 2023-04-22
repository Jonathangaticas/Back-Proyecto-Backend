const { updateAlumnoServices, getAllAlumnosServices, addAlumnoServices, deleteAlumnoServices, getAlumnoByIdServices } = require('../services/alumnoServices')

const getAlumnoByIdController = async (req, res) => {
    const getAlumno = await getAlumnoByIdServices(req);
    res.json(getAlumno)
}
const getAllAlumnosController = async(_, res) => {
    const alumnos = await getAllAlumnosServices();
    res.json(alumnos)
}
const addAlumnoController = async (req, res) => {
    const alumno = await addAlumnoServices(req);
    res.json(alumno);
}
const updateAlumnoController = async (req, res) => {
    const updateAlumno = await updateAlumnoServices(req);
    res.json(updateAlumno)
}
const deleteAlumnoController = async (req, res) => {
    const deleteAlumno = await deleteAlumnoServices(req);
    res.json(deleteAlumno)
}






module.exports = { getAlumnoByIdController, addAlumnoController, getAllAlumnosController, updateAlumnoController, deleteAlumnoController };