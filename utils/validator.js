const { body, check } = require('express-validator');
const validateResult = require('./validateHelper');
const moment = require('moment');

const validateCreate = [
    check('rut')
        .isLength({min: 7, max: 8}).withMessage("Digite el rut correcto sin digito verificador")
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('nombre')
        .exists()
        .not()
        .isEmpty()
        .isString(),
    check('apellido')
        .exists()
        .not()
        .isEmpty()
        .isString(),
    check('edad')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('fechaNacimiento')
        .exists()
        .not()
        .isEmpty()
        .isString()
        .notEmpty().withMessage('La fecha es obligatoria')
        .custom((value) => {
            const date = moment(value, 'DD-MM-YYYY', true);
            if (!date.isValid()) {
            throw new Error('La fecha no es válida');
            }
            return true;
        }),
    check('correo')
        .exists()
        .not()
        .isEmpty()
        .isEmail(),
    check('domicilio')
        .exists()
        .not()
        .isEmpty()
        .isString(),
    check('ciudad')
        .exists()
        .not()
        .isEmpty(),
    check('fecha')
        .exists()
        .not()
        .notEmpty().withMessage('La fecha es obligatoria')
        .custom((value) => {
            const date = moment(value, 'DD-MM-YYYY', true);
            if (!date.isValid()) {
            throw new Error('La fecha no es válida');
            }
            return true;
        }),
    check('pago')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('curso')
        .exists()
        .not()
        .isEmpty()
        .isString(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]
module.exports = validateCreate;