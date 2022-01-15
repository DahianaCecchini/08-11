import React from "react";
import { ChecksBox } from "../CheckBox/ChecksBox";
import  { useState } from "react";
import * as utils from "../Js/validaciones";
import { useHistory } from "react-router-dom";
import { Confirmar } from "../BotonConfirmar/botonConfirmar";

export function Formulario ()  {
    let history = useHistory();
    const [Nombre, setNombre] = useState("")
    const [Direccion, setDireccion] = useState("")
    const [Telefono, setTelefono] = useState("")
    const [NombreIncorrecto, setNombreIncorrecto] = useState ("")
    const [DireccionIncorrecta, setDireccionIncorrecta] = useState ("")
    const [TelefonoIncorrecto, setTelefonoIncorrecto] = useState ("")
    const [allOk, setAllOk] = useState (false)

const Validacion = () => {
    if((utils.validacionNombre(Nombre)  || utils.validacionDireccion(Direccion))||
        utils.validacionCelular(Telefono)) 
        {
        setAllOk(false)
        cargaInfo();
        }
    else{
        setAllOk(true)
        history.push("/TicketPedido")
        } 
        }

const cargaInfo = () => {
    setNombreIncorrecto(utils.validacionNombre(Nombre));
    setDireccionIncorrecta(utils.validacionDireccion(Direccion));
    setTelefonoIncorrecto(utils.validacionCelular(Telefono));}
     
return(
    <div className="formulario">
        <form method="POST" action="http://localhost:4000/formulario" encType="application/json">
            <input className="nombre" 
                type="text" id="name" placeholder="NOMBRE/IDENTIFICADOR" name="Nombre"
                onChange={e => setNombre (e.target.value)} value={Nombre}/>
                {NombreIncorrecto && (<p className="error">Verifique su nombre</p>)}
                
            <input className="direccion" 
                type="text" id="domicilio" placeholder="DIRECCION" name="Direccion"
                onChange={e => setDireccion (e.target.value)} value={Direccion}/>
                {DireccionIncorrecta && (<p className="error">Verifique direccion</p>)}
              
            <input className="celular" 
                id="celular" type="text" placeholder="CELULAR" name="Celular"
                onChange={e => setTelefono (e.target.value)} value={Telefono}/>
                {TelefonoIncorrecto && (<p className="error">Verifique su celular</p>)}
                
            <input className="adicional" type="text" id="info" placeholder="INFO ADICIONAL" name="Adicional" />
    <ChecksBox></ChecksBox>
    {allOk && (<p className="correct">Cargado correctamente</p> )}   
    <button>CARGAR DATOS</button>
        </form>
<Confirmar confirm={Validacion}></Confirmar>
    </div>)

}
export default Formulario;
