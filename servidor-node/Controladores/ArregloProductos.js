const { Client } = require ('pg')

const config = {
  host: 'localhost',
  database: 'Menu',
  user: 'postgres',
  password:'Testing'
}

async function getGrandes(req, res){
  const client = new Client(config)
  await client.connect();
  const result = await client.query("select * from public.productos where categoria='1'")
  console.log(result.rows);
  await client.end();
  res.send(result.rows);}

async function getMedianas(req, res){
  const client = new Client(config)
  await client.connect();
  const result = await client.query("select * from public.productos where categoria='2'")
  console.log(result.rows);
  await client.end();
  res.send(result.rows);}

async function getChicas(req, res){
  const client = new Client(config)
  await client.connect();
  const result = await client.query("select * from public.productos where categoria='3'")
  console.log(result.rows);
  await client.end();
  res.send(result.rows);}

async function getEmpanadas(req, res){
  const client = new Client(config)
  await client.connect();
  const result = await client.query("select * from public.productos where categoria='4'")
  console.log(result.rows);
  await client.end();
  res.send(result.rows);}

async function getPapas(req, res){
  const client = new Client(config)
  await client.connect();
  const result = await client.query("select * from public.productos where categoria='5'")
  console.log(result.rows);
  await client.end();
  res.send(result.rows);}

async function getSandwiches(req, res){
  const client = new Client(config)
  await client.connect();
  const result = await client.query("select * from public.productos where categoria='6'")
  console.log(result.rows);
  await client.end();
  res.send(result.rows);}

async function getBebidas(req, res){
  const client = new Client(config)
  await client.connect();
  const result = await client.query("select * from public.productos where categoria='7'")
  console.log(result.rows);
  await client.end();
  res.send(result.rows);}

async function getExtras(req, res){
  const client = new Client(config)
  await client.connect();
  const result = await client.query("select * from public.productos where categoria='8'")
  console.log(result.rows);
  await client.end();
  res.send(result.rows);}


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
