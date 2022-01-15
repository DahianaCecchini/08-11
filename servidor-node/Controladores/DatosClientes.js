const { Client } = require ('pg');

const config = {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
  }
async function DatosClientes(req, res){
    try{
        const client = new Client(config)
        await client.connect();
        let datos = req.body
        console.log(datos);
        const result = await client.query("insert into public.formulariobase (Nombre, Direccion, Celular, Adicional) values ($1,$2,$3,$4) returning *",
        [datos.Nombre, datos.Direccion, datos.Celular, datos.Adicional]);
        console.log(result.rows);
        await client.end()
        res.status(200).send({message:'Enviado con exito'});
        }
        catch (error){
            console.error('No se ha podido conectar al servidor', error);
            res.sendStatus(510)}
        }  
module.exports = {DatosClientes}

