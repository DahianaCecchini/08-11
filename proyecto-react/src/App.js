
import './App.css';
import '../src/IndexPrincipal/CssIndex/iPadCss.css'
import '../src/IndexPrincipal/CssIndex/pcCss.css'
import { Nav } from './IndexPrincipal/Nav/NavBotones';
import { Productos } from './IndexPrincipal/Productos/Productos';
import LogoMaxi from './IndexPrincipal/Logo maxi pizzas.png';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import IndexCajaGastos from './CajaGastos/IndexCajaGastos';
import ReporteDiarioEHistorial from './PaginaReporte/ReporteDiarioEHistorial';
import TicketPedido from './Tickets/TicketPedido';
import Carrito from './IndexPrincipal/Carrito/addCarrito';
import { useState } from 'react';




function App() {
const [carrito,setCarrito] = useState([])

function AgregarACarrito (producto) {
setCarrito (carrito.concat(producto))
}


  return (

<Switch>
<Route  path exact= '/'>
<div className="Container">
<header><img src={LogoMaxi} title="Logo" alt="Logo"/></header>
<Nav></Nav>
<Productos></Productos>
</div>
</Route>  
<Route  exact path = "/IndexCaja"> <IndexCajaGastos/> </Route>
<Route exact path = "/TicketPedido"> <TicketPedido/> </Route>
<Route exact path = '/PaginaReporte'> <ReporteDiarioEHistorial/></Route>

</Switch>
  );
}

export default App;
