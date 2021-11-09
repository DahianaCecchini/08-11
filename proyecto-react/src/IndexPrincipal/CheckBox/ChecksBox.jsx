import React from "react";
import { Confirmar } from "../BotonConfirmar/botonConfirmar"

export function ChecksBox () {
    return(
    <div id="check">
        <input type="checkbox"  id="miElementoCheckbox"/> ROMINA
        <input type="checkbox"  id="miElementoCheckbox2"/> JUAN
            <div id="msg"></div>
            <div id="msg2"></div> 
    <Confirmar></Confirmar>
    </div>
    )
}