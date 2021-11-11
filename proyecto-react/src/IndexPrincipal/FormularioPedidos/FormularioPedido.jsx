import React from "react";
import { ChecksBox } from "../CheckBox/ChecksBox";
import  { useState } from "react";
import * as utils from "../Js/validaciones";


export function Formulario ()  {

    const [Nombre, setNombre] = useState("")
    const [Direccion, setDireccion] = useState("")
    const [Telefono, setTelefono] = useState("")
    const [NombreIncorrecto, setNombreIncorrecto] = useState ("")
    const [DireccionIncorrecta, setDireccionIncorrecta] = useState ("")
    const [TelefonoIncorrecto, setTelefonoIncorrecto] = useState ("")
    const [allOk, setAllOk] = useState (false)
    
const Validacion = () => {
    ((utils.validacionNombre(Nombre)  ||
     utils.validacionDireccion(Direccion))||
      utils.validacionCelular(Telefono)) ?
      setAllOk(false) : setAllOk(true); 
     cargaInfo();}
        
     const cargaInfo = () => {
        setNombreIncorrecto(utils.validacionNombre(Nombre));
        setDireccionIncorrecta(utils.validacionDireccion(Direccion));
        setTelefonoIncorrecto(utils.validacionCelular(Telefono));
    }
     
    return(
        <div className="formulario">
            <form>
                <input className="nombre" 
                type="text" 
                id="name" 
                placeholder="NOMBRE/IDENTIFICADOR"
                onChange={e => setNombre (e.target.value)} value={Nombre}/>
                {
                NombreIncorrecto && (
                    <p className="error">Verifique su nombre</p>)}
                

                <input className="direccion" 
                type="text" 
                id="domicilio" 
                placeholder="DIRECCION"
                onChange={e => setDireccion (e.target.value)} value={Direccion}/>
                {
                DireccionIncorrecta && (
                    <p className="error">Verifique direccion</p>)}
              

                <input className="celular" 
                id="celular" 
                type="text" 
                placeholder="CELULAR" onChange={e => setTelefono (e.target.value)} value={Telefono}/>
                {
                TelefonoIncorrecto && (
                    <p className="error">Verifique su celular</p>)}
                

                <input className="adicional" 
                type="text" 
                id="info" 
                placeholder="INFO ADICIONAL"/>


            <button type="button" onClick={() => Validacion()}>Enviar</button>
            {
                allOk && (<p className="correct">Cargado correctamente</p> )}

                       
            </form>
                <ChecksBox></ChecksBox>
        </div> 
    )
}
export default Formulario;