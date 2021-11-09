import React from 'react'; 
import { Carrito } from '../Carrito/addCarrito';

import { ListadoPequeñas, ListadoPizzas, ListadoSandwiches,
        ListadoEmpanadas, ListadoMedianas,ListadoFritas, ListadoBebidas, ListadoExtras} from '../Productos/ListadoProductos'

export const Productos = () => {
        
return(
<section>
<div className="productos">
  
<h1>PIZZAS GRANDES</h1>
<div id="pizzas">
<ListadoPizzas></ListadoPizzas>
</div>

<h1>PIZZAS MEDIANAS</h1>
<div id="pizzasM">
<ListadoMedianas></ListadoMedianas>
</div>

<h1>PIZZAS CHICAS</h1>
<div id="pizzasCh">
<ListadoPequeñas></ListadoPequeñas>
</div>

<h1>EMPANADAS</h1>
<div id="empanadas">
<ListadoEmpanadas></ListadoEmpanadas>
</div>

<h1>PAPAS FRITAS</h1>
<div id="fritas">
<ListadoFritas></ListadoFritas>
</div>

<h1>SANDWICHES CALIENTES</h1>
<div id="sandwiches">
<ListadoSandwiches></ListadoSandwiches>
</div>

<h1>BEBIDAS</h1>
<div id="bebidas">
<ListadoBebidas></ListadoBebidas>
</div>

<h1>EXTRAS</h1>
<div id="extras">
<ListadoExtras></ListadoExtras>
</div>

</div>
<Carrito></Carrito>
</section>)
}



    