import React from 'react';
import  '../Tickets/Css/TicketsCss.css'



function Ticket() {
  return (
<body>
<form>

<h1 id="Det">DETALLE PEDIDO</h1>

<div className="DottedBox">
    <input className="nombre" type="text" placeholder="NOMBRE/IDENTIFICADOR"/>
    <input className="direccion" type="text" placeholder="DIRECCION"/>
     <input className="celular" type="text" placeholder="TELEFONO"/>
     <input className="adicional" type="text" placeholder="INFO ADICIONAL"/>
</div>
     <div className="detallePedido">
         <div className="detalle">
         PRODUCTO
         <input type="text"/>
         CANTIDAD
         <input className="cantidad" type="number"/>
         IMPORTE
         <input className="importe" type="text"/>
         </div><br/>

         <div className="detalle2">
         PRODUCTO
         <input type="text"/>
         CANTIDAD
         <input className="cantidad" type="number"/>
         IMPORTE
         <input className="importe" type="text"/>
         </div><br/>

         <div className="detalle3">
         PRODUCTO
         <input type="text"/>
         CANTIDAD
         <input className="cantidad" type="number"/>
         IMPORTE
         <input className="importe" type="text"/>
         </div><br/>

         <div className="detalle4">
         PRODUCTO
         <input type="text"/>
         CANTIDAD
         <input className="cantidad" type="number"/>
         IMPORTE
         <input className="importe" type="text"/>
         </div><br/>

         <div className="detalle5">
         PRODUCTO
         <input type="text"/>
         CANTIDAD
         <input className="cantidad" type="number"/>
         IMPORTE
         <input className="importe" type="text"/>
         </div><br/>
      </div>

    
         
<div className="importes">
      <div className="subtotal"> SUBTOTAL
         <input type="text"/>
         <div className="descuento"/> DESCUENTO/AJUSTE
         <input type="text"/>
         <div className="importefinal"/> IMPORTE FINAL
         <input type="text"/>
      </div>
</div>
         
      </form>

<h3>GRACIAS POR ELEGIRNOS!</h3>
</body>

  );
}

export default Ticket;