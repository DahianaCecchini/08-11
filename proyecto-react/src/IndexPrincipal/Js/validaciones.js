let numRegEx = /\d/;
/* funciones */

export const validacionNombre = (nombre) => (nombre.length < 2 || numRegEx.test(nombre));

export const validacionDireccion = (domicilio) => (domicilio.length < 6);

export const validacionCelular = (celular) => (celular.length < 8);


/*const validacionN = () => {
    let n = document.getElementById('number').value  
        if(n.length <=1){
        document.getElementById('n').innerHTML="Dirección no válida"
        }else{
        document.getElementById('n').innerHTML= ""}}
            document.getElementById('number').addEventListener('keyup', validacionN)

export default (validacionCelular, validacionDireccion, validacionCelular, validacionN);*/