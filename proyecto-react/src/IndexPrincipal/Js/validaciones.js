import React from "react"


const validacionCelular = () => {
    let celular2 = document.getElementById('celular').value  
        if(celular2.length >1 && celular2.length <=9){
         document.getElementById('celular2').innerHTML=""
        }else{
        document.getElementById('celular2').innerHTML= "Celular no válido"}}
            document.getElementById('celular').addEventListener('keyup', validacionCelular)

const validacionNombre = () => {
    let nombre = document.getElementById('name').value 
        if(nombre.length <4){
         document.getElementById('identificador').innerHTML="Nombre no válido"
        }else{
        document.getElementById('identificador').innerHTML= ""}}
            document.getElementById('name').addEventListener('keyup', validacionNombre)

const validacionDireccion = () => {
    let direccion = document.getElementById('domicilio').value  
        if(direccion.length <4){
         document.getElementById('direccion').innerHTML="Dirección no válida"
        }else{
        document.getElementById('direccion').innerHTML= ""}}
            document.getElementById('domicilio').addEventListener('keyup', validacionDireccion)

const validacionN = () => {
    let n = document.getElementById('number').value  
        if(n.length <=1){
        document.getElementById('n').innerHTML="Dirección no válida"
        }else{
        document.getElementById('n').innerHTML= ""}}
            document.getElementById('number').addEventListener('keyup', validacionN)

export default (validacionCelular, validacionDireccion, validacionCelular, validacionN);