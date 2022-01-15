const  pool  = require ('../Servicios/pool')

async function getGrandes(req, res){
  try{
    const result = await pool.query("select * from public.productos where categoria='1'")
    res.status(200).send(result.rows);
    }
  catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getMedianas(req, res){
  try{
    const result = await pool.query("select * from public.productos where categoria='2'")
    res.status(200).send(result.rows);
    }
  catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getChicas(req, res){
  try{
    const result = await pool.query("select * from public.productos where categoria='3'")
    res.status(200).send(result.rows);
    }
  catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getEmpanadas(req, res){
  try{
    const result = await pool.query("select * from public.productos where categoria='4'")
    res.status(200).send(result.rows);
    }
  catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getPapas(req, res){
  try{
    const result = await pool.query("select * from public.productos where categoria='5'")
    res.status(200).send(result.rows);
    }
  catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getSandwiches(req, res){
  try{
    const result = await pool.query("select * from public.productos where categoria='6'")
    res.status(200).send(result.rows);
    }
  catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getBebidas(req, res){
  try{
    const result = await pool.query("select * from public.productos where categoria='7'")
    res.status(200).send(result.rows);
    }
  catch (error){
    console.error('No se ha podido conectar al servidor', error);
    res.sendStatus(510)
    }}

async function getExtras(req, res){
  try{
    const result = await pool.query("select * from public.productos where categoria='8'")
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
