import React from "react"

export const CargaProductos = (props) => {
    return (
        <div id="pizzas">
            <button onClick={() => props.addToCart(props.product)}>MUZZA</button>
            <button onClick={() => props.addToCart(props.product)}>SIMPLE</button>
            <button onClick={() => props.addToCart(props.product)}>GOURMET</button>
            <button onClick={() => props.addToCart(props.product)}>SUPERGUSTOS</button>
       </div>
    )
}
const addToCart = (product) =>{
    setTotal(0)
    setCart(cart.concat(new Cart(product)))
}


useEffect(()=>{
let aux = 0
cart.forEach(value => {
    aux += value.product * value.quantity
})
setTotal(aux)
},[cart])

const deleteItem = (index) => {
    let newCart = [...cart]
    if (index > -1) {
       newCart.splice(index, 1);
    }
    setCart(newCart)
    }