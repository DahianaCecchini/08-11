import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

export const ListadoProductos = (props) => {
             
    return (
        <div>{
            props.products.length == 0 ? 
            (
            <span><PropagateLoader loading={true}></PropagateLoader></span> 
            ):
            (
            props.products.map((product, index) => 
            
            <button key={index} onClick={()=>props.AgregarACarrito(product)}>
                {product.nombre}</button>))}
        </div>
    )}