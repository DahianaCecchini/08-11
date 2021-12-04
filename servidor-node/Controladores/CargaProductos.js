const express = require('express');
const router = express.Router()


const {listaPGrandes,
    listaPMedianas,
    listaPChicas,
    listaPapas,
    listaEmpanadas,
    listaBebidas,
    listaSandwiches,
    listaExtras} = require('../Controladores/ArregloProductos')

function getGrandes(req, res){
    res.send(listaPGrandes);
}
function getMedianas(req, res){
    res.send(listaPMedianas);
}
function getChicas(req, res){
    res.send(listaPChicas);
}
function getPapas(req, res){
    res.send(listaPapas);
}
function getEmpanadas(req, res){
    res.send(listaEmpanadas);
}
function getBebidas(req, res){
    res.send(listaBebidas);
}
function getSandwiches(req, res){
    res.send(listaSandwiches);
}
function getExtras(req, res){
    res.send(listaExtras);
}
module.exports = {
    getGrandes,
    getMedianas,
    getChicas,
    getPapas,
    getEmpanadas,
    getBebidas,
    getSandwiches,
    getExtras
}