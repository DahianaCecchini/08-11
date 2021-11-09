
import '../App.css';
import '../CajaGastos/Css/CajaGastos.css';
import '../CajaGastos/Css/Responsive.css';
import LogoMaxi from '../CajaGastos/Logo maxi pizzas.png';



function IndexCajaGastos() {
  return (
   
    <div> 
   <header><img src={LogoMaxi} title="Logo" alt="Logo"/></header>
<body>
    <form class="InicioCaja"><h1>INICIO DE CAJA</h1>
        <input class="fechacaja" type="date" placeholder="FECHA"/>
        <input class="repartidor1" type="number" placeholder="Rep 1"/>
        <input class="repartidor2" type="number" placeholder="Rep 2"/>
        <input class="repartidor3" type="number" placeholder="Rep 3"/>
        <input class="mostrador" type="number" placeholder="Mostrador"/>
    </form>
    <button class="Cargar">CARGAR</button>

    <form class="Compras"><h1>COMPRAS/GASTOS</h1>
        <input class="FECHA" type="date" placeholder="FECHA"/>
        <input class="PRODUCTO" type="text" placeholder="PRODUCTO"/>
        <input class="PROVEEDOR" type="text" placeholder="PROVEEDOR"/> 
        <input class="CANIDAD" type="number" placeholder="CANTIDAD"/>
        <input class="PRECIO" type="number" placeholder="PRECIO POR UNIDAD/LTS/KGS"/>
        <input class="ADICIONAL" type="text" placeholder="INFO ADICIONAL"/>
    </form>
    <button class="Guardar"> GUARDAR</button>
</body></div>
  );
}

export default IndexCajaGastos;
