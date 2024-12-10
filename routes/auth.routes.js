const express = require('express')
const router = express.Router();
const authController =  require('./../controllers/auth.controller')
const authValidation = require('./../middleware/validationUser')

router.post("/", authValidation,  authController.register)
router.post("/", authValidation,  authController.login)

module.exports = router;