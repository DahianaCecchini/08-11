const express = require('express');
const router = express.Router()

const Controladores = require('../Controladores/CargaProductos')

router.get('/', Controladores.getGrandes)
router.get('/', Controladores.getMedianas)
router.get('/', Controladores.getChicas)
router.get('/', Controladores.getPapas)
router.get('/', Controladores.getEmpanadas)
router.get('/', Controladores.getBebidas)
router.get('/', Controladores.getSandwiches)
router.get('/', Controladores.getExtras)


module.export = router;