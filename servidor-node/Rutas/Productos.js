const express = require('express');
const router = express.Router()

const Controladores = require('../Controladores/CargaProductos')

router.get('/pizzasGrandes', Controladores.getGrandes)
router.get('/pizzasMedianas', Controladores.getMedianas)
router.get('/pizzasChicas', Controladores.getChicas)
router.get('/papasFritas', Controladores.getPapas)
router.get('/empanadas', Controladores.getEmpanadas)
router.get('/bebidas', Controladores.getBebidas)
router.get('/sandwichesCalientes', Controladores.getSandwiches)
router.get('/extras', Controladores.getExtras)


module.exports = router;