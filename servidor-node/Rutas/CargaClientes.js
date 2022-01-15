const { Router } = require('express');
const express = require('express');
const router = express.Router()
const clientes = require ('../Controladores/DatosClientes')


router.post('/', clientes.datosClientes)

module.exports = router