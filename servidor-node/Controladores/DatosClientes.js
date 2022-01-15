const { Client } = require ('pg');

const config = {
    host: 'localhost',
    database: 'formulario',
    user: 'postgres',
    password:'Testing'
  }
async function DatosClientes(req, res){
    try{
        const client = new Client(config)
        await client.connect();
        let datos = req.body
        const result = await client.query
        ("insert into public.formulario(nombre, direccion, celular, adicional) values ($1,$2,$3,$4) returning *",
        [datos.Nombre, datos.Direccion, datos.Celular, datos.Adicional]);
        console.log(result.rows);
        await client.end();
        res.status(200).send({message:'Enviado con exito', datos: datos});
        }
        catch (error){
            console.error('No se ha podido conectar al servidor', error);
            res.sendStatus(510)}
        }  
module.exports = {DatosClientes}

