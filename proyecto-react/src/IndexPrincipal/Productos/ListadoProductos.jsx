import React from "react"
import { useEffect, useState } from "react"




export const ListadoPizzas = (props) => {
    const [products, setProducts] = useState([])

useEffect(()=>{
        fetch('http://localhost:4000/pizzasGrandes').then(res =>
        res.json())
        .then (res => setProducts(res))},[])
return (
    <div id="pizzas">
        {
         products.length == 0 ? 
            (
                <>
                    Cargando...
                </>
            ):
            (products.map((product, index) => 
                <button key={index} onClick={()=>props.AgregarACarrito(product.nombre)}>
                {product.nombre}
                    </button>))}
    </div>
)}

export const ListadoMedianas = (props) => {
    const [products, setProducts] = useState([])
useEffect(()=>{
        fetch('http://localhost:4000/pizzasMedianas').then(res =>
        res.json())
        .then (res => setProducts(res))},[])
return (
    <div id="pizzasM">
        {
         products.length == 0 ? 
            (
                <>
                    Cargando...
                </>
            ):
            (
                products.map(product => 
                    <button onClick={()=>props.AgregarACarrito(product.nombre)}>
                    {product.nombre}</button>))}
    </div>
)}

export const ListadoPequeñas = (props) => {
    const [products, setProducts] = useState([])
useEffect(()=>{
        fetch('http://localhost:4000/pizzasChicas').then(res =>
        res.json())
        .then (res => setProducts(res))},[])
return (
    <div id="pizzasCh">
        {
         products.length == 0 ? 
            (
                <>
                    Cargando...
                </>
            ):
            (
                products.map(product => 
                    <button onClick={()=>props.AgregarACarrito(product.nombre)}>
                    {product.nombre}</button>))}
    </div>
)}

export const ListadoEmpanadas = (props) => {
    const [products, setProducts] = useState([])
useEffect(()=>{
        fetch('http://localhost:4000/empanadas').then(res =>
        res.json())
        .then (res => setProducts(res))},[])
return (
    <div id="empanadas">
        {
         products.length == 0 ? 
            (
                <>
                    Cargando...
                </>
            ):
            (
                products.map(product => 
                    <button onClick={()=>props.AgregarACarrito(product.nombre)}>
                    {product.nombre}</button>))}
    </div>
)}

export const ListadoFritas = (props) => {
    const [products, setProducts] = useState([])
useEffect(()=>{
        fetch('http://localhost:4000/papasFritas').then(res =>
        res.json())
        .then (res => setProducts(res))},[])
return (
    <div id="fritas">
        {
         products.length == 0 ? 
            (
                <>
                    Cargando...
                </>
            ):
            (
                products.map(product => 
                    <button onClick={()=>props.AgregarACarrito(product.nombre)}>
                    {product.nombre}</button>))}
    </div>
)}

export const ListadoSandwiches = (props) => {
    const [products, setProducts] = useState([])
useEffect(()=>{
        fetch('http://localhost:4000/sandwichesCalientes').then(res =>
        res.json())
        .then (res => setProducts(res))},[])
return (
    <div id="sandwiches">
        {
         products.length == 0 ? 
            (
                <>
                    Cargando...
                </>
            ):
            (
                products.map(product => 
                    <button onClick={()=>props.AgregarACarrito(product.nombre)}>
                    {product.nombre}</button>))}
    </div>
)}

export const ListadoBebidas = (props) => {
    const [products, setProducts] = useState([])
useEffect(()=>{
        fetch('http://localhost:4000/bebidas').then(res =>
        res.json())
        .then (res => setProducts(res))},[])
return (
    <div id="bebidas">
        {
         products.length == 0 ? 
            (
                <>
                    Cargando...
                </>
            ):
            (
                products.map(product => 
                    <button onClick={()=>props.AgregarACarrito(product.nombre)}>
                    {product.nombre}</button>))}
    </div>
)}

export const ListadoExtras = (props) => {
    const [products, setProducts] = useState([])
useEffect(()=>{
        fetch('http://localhost:4000/extras').then(res =>
        res.json())
        .then (res => setProducts(res))},[])
return (
    <div id="extras">
        {
         products.length == 0 ? 
            (
                <>
                    Cargando...
                </>
            ):
            (
                products.map(product => 
                    <button onClick={()=>props.AgregarACarrito(product.nombre)}>
                    {product.nombre}</button>))}
    </div>
)}