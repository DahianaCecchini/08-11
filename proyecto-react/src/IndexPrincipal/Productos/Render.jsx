import React from "react";
import { useEffect, useState } from "react"
import PropagateLoader from "react-spinners/PropagateLoader";


export const ListadoProductos = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
             
return (
    <div>{
        products.length == 0 ? 
        (
        <span><PropagateLoader loading={loading}></PropagateLoader></span> 
        ):
        (
        products.map((product, index) => 
        <button key={index} onClick={()=>props.AgregarACarrito(product.nombre)}>{product.nombre}</button>))}
    </div>
)}