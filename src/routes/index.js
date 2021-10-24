var express = require('express');
var router = express.Router();
const { vista, saludo, destroy } = require('../controllers/formController')
const validate = require('../middlewares/formValidator')
/* GET home page. */


router.get('/', vista );
router.post('/',validate, saludo)
router.get('/destroy', destroy)
module.exports = router;
