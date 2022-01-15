const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const productosRoutes = require('./Rutas/CargaProductos')
const clientesRoutes = require('./Rutas/CargaClientes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

app.use(cors());

require('dotenv').config();

app.use('/', productosRoutes);
app.use('/formulario', clientesRoutes);

app.get('/health',(req,res)=>{
    res.sendStatus(200)})

app.get('/prueba', (req,res)=>{
    try {
        console.log('Esta todo OK');
        res.sendStatus(200)
      } catch (error) {
        console.error('Ocurrió un error', error);
        res.sendStatus(510)
      }
})

app.listen(4000,()=> {
    console.log("Estoy funcionando")})
