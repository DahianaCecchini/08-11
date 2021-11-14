import React, { useState } from "react";
import { useEffect } from "react";


export const Carrito = (props) => {
const [cantidad, setCantidad] =useState(1)
const [precio, setPrecio] =useState([])
const [total, setTotal] = useState(0)
        
useEffect(()=>{
    let aux = 0
    precio.forEach(() => {
        aux += precio * cantidad
    })
    setTotal(aux)
},[props.carrito])


    return (
    <div>
        <h1 className="detalleP">DETALLE PEDIDO</h1>
        <ul id="carrito">
        {
         props.carrito.length == 0 ? 
            (
                <>
                    No hay elementos en el carrito
                </>
            ):
                 (props.carrito.map((producto, index)=>
                        <li key={index}>
                            <p> {producto} </p>
                            CANT.<input name="cantidad" value={cantidad} onChange={(e)=> setCantidad(e.target.value)}/>
                            PRECIO <input name="precio" value={precio} onChange={(e)=> setPrecio(e.target.value)} />
                        </li>

                    )
                 )}
            <p>TOTAL $ {total}</p>
        </ul>
    </div>
    )
}
export default Carrito;