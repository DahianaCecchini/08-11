const { request } = require('express');
const { Client } = require ('pg');

const config = {
  host: 'localhost',
  database: 'formulario',
  user: 'postgres',
  password:'Testing'};

async function DatosClientes(req, res) {
    const AgregarInfo = {
        nombre: request.body.nombre,
        direccion: request.body.direccion,
        celular: request.body.celular,
        adicional: request.body.adicional}
        
const client = new Client(config)
  await client.connect();
  let informacion = req.body;
  const result = await client.query("insert into public.formulario-contacto(nombre, direccion, celular, adicional) values ($1,$2,$3,$4) returning *",
  [informacion.nombre, informacion.direccion, informacion.celular, informacion.adicional]);
  await client.end();
  res.send({Datos: AgregarInfo})};

  module.exports = {DatosClientes}