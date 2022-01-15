const express = require('express');
const router = express.Router()
const controlador = require ('../Controladores/ArregloProductos')


router.get('/pizzasGrandes', controlador.getGrandes)
router.get('/pizzasMedianas', controlador.getMedianas)
router.get('/pizzasChicas', controlador.getChicas)
router.get('/empanadas', controlador.getEmpanadas)
router.get('/papasFritas', controlador.getPapas)
router.get('/bebidas', controlador.getBebidas)
router.get('/sandwichesCalientes', controlador.getSandwiches)
router.get('/extras', controlador.getExtras)


module.exports = router;