const { Client } = require ('pg')

const config = {
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD
}

async function getGrandes(req, res){
  try{
    const client = new Client(config)
    await client.connect();
    const result = await client.query("select * from public.productos where categoria='1'")
    await client.end();
    res.status(200).send(result.rows);
    console.log(result.rows);
  }
    catch (error){
      console.error('No se ha podido conectar al servidor', error);
      res.sendStatus(510)
    }}

async function getMedianas(req, res){
  try{
    const client = new Client(config)
    await client.connect();
    const result = await client.query("select * from public.productos where categoria='2'")
    await client.end();
    res.status(200).send(result.rows);
  }
    catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getChicas(req, res){
  try{
    const client = new Client(config)
    await client.connect();
    const result = await client.query("select * from public.productos where categoria='3'")
    await client.end();
    res.status(200).send(result.rows);
  }
    catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getEmpanadas(req, res){
  try{
    const client = new Client(config)
    await client.connect();
    const result = await client.query("select * from public.productos where categoria='4'")
    await client.end();
    res.status(200).send(result.rows);
  }
    catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getPapas(req, res){
  try{
    const client = new Client(config)
    await client.connect();
    const result = await client.query("select * from public.productos where categoria='5'")
    await client.end();
    res.status(200).send(result.rows);
  }
    catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getSandwiches(req, res){
  try{
    const client = new Client(config)
    await client.connect();
    const result = await client.query("select * from public.productos where categoria='6'")
    await client.end();
    res.status(200).send(result.rows);
  }
    catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getBebidas(req, res){
  try{
    const client = new Client(config)
    await client.connect();
    const result = await client.query("select * from public.productos where categoria='7'")
    await client.end();
    res.status(200).send(result.rows);
  }
    catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getExtras(req, res){
  try{
    const client = new Client(config)
    await client.connect();
    const result = await client.query("select * from public.productos where categoria='8'")
    await client.end();
    res.status(200).send(result.rows);
  }
    catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}


module.exports = {
    getGrandes,
    getMedianas,
    getChicas,
    getEmpanadas,
    getPapas,
    getSandwiches,
    getBebidas,
    getExtras
}
