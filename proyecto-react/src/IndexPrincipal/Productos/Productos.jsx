import React from 'react'; 
import { Carrito } from '../Carrito/addCarrito';
import { Formulario } from '../FormularioPedidos/FormularioPedido';
import { ListadoPequeñas, ListadoPizzas, ListadoSandwiches,
        ListadoEmpanadas, ListadoMedianas,ListadoFritas, ListadoBebidas, ListadoExtras} from '../Productos/ListadoProductos'

export const Productos = (props) => {
        
return(
<section>
<div className="productos">
  
<h1>PIZZAS GRANDES</h1>
<div id="pizzas">
<ListadoPizzas AgregarACarrito={props.AgregarACarrito}></ListadoPizzas>
</div>

<h1>PIZZAS MEDIANAS</h1>
<div id="pizzasM">
<ListadoMedianas AgregarACarrito={props.AgregarACarrito}></ListadoMedianas>
</div>

<h1>PIZZAS CHICAS</h1>
<div id="pizzasCh">
<ListadoPequeñas AgregarACarrito={props.AgregarACarrito}></ListadoPequeñas>
</div>

<h1>EMPANADAS</h1>
<div id="empanadas">
<ListadoEmpanadas AgregarACarrito={props.AgregarACarrito}></ListadoEmpanadas>
</div>

<h1>PAPAS FRITAS</h1>
<div id="fritas">
<ListadoFritas AgregarACarrito={props.AgregarACarrito}></ListadoFritas>
</div>

<h1>SANDWICHES CALIENTES</h1>
<div id="sandwiches">
<ListadoSandwiches AgregarACarrito={props.AgregarACarrito}></ListadoSandwiches>
</div>

<h1>BEBIDAS</h1>
<div id="bebidas">
<ListadoBebidas AgregarACarrito={props.AgregarACarrito}></ListadoBebidas>
</div>

<h1>EXTRAS</h1>
<div id="extras">
<ListadoExtras AgregarACarrito={props.AgregarACarrito}></ListadoExtras>
</div>

</div>
<div id="segundaColumna">

<Carrito carrito={props.carrito}></Carrito> 
<Formulario></Formulario>    
</div>

 
</section>)
}



    