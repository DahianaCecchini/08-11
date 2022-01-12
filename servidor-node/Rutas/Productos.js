const express = require('express');
const router = express.Router()
const Controlador2 = require ('../Controladores/ArregloProductos')
const Controladores = require('../Controladores/CargaProductos')

router.get('/pizzasGrandes', Controlador2.getGrandes)
router.get('/pizzasMedianas', Controlador2.getMedianas)
router.get('/pizzasChicas', Controlador2.getChicas)
router.get('/empanadas', Controlador2.getEmpanadas)
router.get('/papasFritas', Controlador2.getPapas)
router.get('/bebidas', Controlador2.getBebidas)
router.get('/sandwichesCalientes', Controlador2.getSandwiches)
router.get('/extras', Controlador2.getExtras)


module.exports = router;