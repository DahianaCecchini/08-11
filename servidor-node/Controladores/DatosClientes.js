const pool= require ('../Servicios/pool');

async function datosClientes(req, res){
    try{
        let datos = req.body
        const result = await pool.query
        ("insert into public.formulariobase (nombre, direccion, celular, adicional) values ($1,$2,$3,$4) returning *",
        [datos.nombre, datos.direccion, datos.celular, datos.adicional]);
        console.log(result.rows);
        res.status(200).send({message:'Enviado con exito'});
        }
    catch (error){
        console.error('No se ha podido conectar al servidor', error);
        res.sendStatus(510)}
        }  

module.exports = {datosClientes}

