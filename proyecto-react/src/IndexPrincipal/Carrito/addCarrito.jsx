import React from "react";
import { Formulario } from "../FormularioPedidos/FormularioPedido";


export function Carrito () {
    return (
      
<div id= "segundaColumna">
    <h1 className="detalleP">DETALLE PEDIDO</h1>
    <ul id="carrito">
        <li>
            <p>PIZZA</p>
            CANT.<input id="cantidad" />
            PRECIO<input id="precio" />
        </li>
        <li>
            <p>PIZZA</p>
            CANT.<input id="cantidad" />
            PRECIO<input id="precio" />
        </li>
    </ul>
<Formulario></Formulario>
</div>
    )
}