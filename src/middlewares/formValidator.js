const {check} = require('express-validator')

module.exports = [
    check('name')
    .notEmpty().withMessage('nombre requerido'),
    check('email')
    .notEmpty().withMessage('nombre requerido').bail()
    .isEmail().withMessage('ingrese un meil valido'),
    check('edad')
    .notEmpty().withMessage('nombre requerido').bail()
    .isInt().withMessage('el valor ingresado debe de ser un número'),
    check('color')
    .notEmpty().withMessage('seleccione un color')
]