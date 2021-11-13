import React from "react"
import { Link } from "react-router-dom"

export function Confirmar (props) {
  return(
    <button className="confirmarPedido" onClick={props.confirm}>CONFIRMAR/IMPRIMIR</button>)
}