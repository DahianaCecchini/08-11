import React from "react"

export const ProductRenderer = (props) => {
    return (
        <div id="pizzas">
            <button onClick={() => props.addToCart(props.product)}>MUZZA</button>
            <button onClick={() => props.addToCart(props.product)}>SIMPLE</button>
            <button onClick={() => props.addToCart(props.product)}>AJAJA</button>
            <button onClick={() => props.addToCart(props.product)}>LLLLO</button>
       </div>
    )
}