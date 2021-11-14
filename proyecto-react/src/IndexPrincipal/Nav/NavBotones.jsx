import React from 'react';
import {Link} from 'react-router-dom'



export const Nav = () => {
    return(
            <nav className="encabezado">
                <Link className="compras" to={"/IndexCaja"}>INICIO/GASTOS</Link>
                <Link className="botonReporte" to={'/PaginaReporte'}>REPORTE</Link>
            </nav>
        )
}