import React from "react";




export function Carrito (props) {
    return (
    <div>
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
    </div>
    )
}
export default Carrito;