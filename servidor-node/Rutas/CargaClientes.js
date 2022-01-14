const { Router } = require('express');
const express = require('express');
const router = express.Router()
const Clientes = require ('../Controladores/DatosClientes')


router.post('/', Clientes.DatosClientes)

module.exports = router