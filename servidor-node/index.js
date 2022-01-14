const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const productosRoutes = require('./Rutas/CargaProductos')
const clientesRoutes = require('./Rutas/CargaClientes');

function cors() {
    return (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();}} 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

app.use(cors());

app.use('/', productosRoutes);
app.use('/', clientesRoutes);

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
