import React from "react"
import { useEffect, useState } from "react"
import { ListadoProductos } from "./Render";



export const ListadoPizzas = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

useEffect(()=>{
    fetch('http://localhost:4000/pizzasGrandes')
        .then(res => res.json())
        .then (res => {
        setLoading(false);
        setProducts(res)})},[])            
return (
    <ListadoProductos products={products} AgregarACarrito={props.AgregarACarrito}></ListadoProductos>
)}

export const ListadoMedianas = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

useEffect(()=>{
        fetch('http://localhost:4000/pizzasMedianas')
        .then(res => res.json())
        .then (res => {
        setLoading(false);
        setProducts(res)})},[])   
return (
    <ListadoProductos products={products} AgregarACarrito={props.AgregarACarrito}></ListadoProductos>
)}

export const ListadoPequeñas = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

useEffect(()=>{
        fetch('http://localhost:4000/pizzasChicas')
        .then(res => res.json())
        .then (res => {
        setLoading(false);
        setProducts(res)})},[])   
return (
    <ListadoProductos products={products} AgregarACarrito={props.AgregarACarrito}></ListadoProductos>
)}

export const ListadoEmpanadas = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

useEffect(()=>{
        fetch('http://localhost:4000/empanadas')
        .then(res => res.json())
        .then (res => {
        setLoading(false);
        setProducts(res)})},[])  
return (
    <ListadoProductos products={products} AgregarACarrito={props.AgregarACarrito}></ListadoProductos>
)}

export const ListadoFritas = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

useEffect(()=>{
        fetch('http://localhost:4000/papasFritas')
        .then(res => res.json())
        .then (res => {
        setLoading(false);
        setProducts(res)})},[])  
return (
    <ListadoProductos products={products} AgregarACarrito={props.AgregarACarrito}></ListadoProductos>
)}

export const ListadoSandwiches = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

useEffect(()=>{
        fetch('http://localhost:4000/sandwichesCalientes')
        .then(res => res.json())
        .then (res => {
        setLoading(false);
        setProducts(res)})},[]) 
return (
    <ListadoProductos products={products} AgregarACarrito={props.AgregarACarrito}></ListadoProductos>
)}

export const ListadoBebidas = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

useEffect(()=>{
        fetch('http://localhost:4000/bebidas')
        .then(res => res.json())
        .then (res => {
        setLoading(false);
        setProducts(res)})},[]) 
return (
    <ListadoProductos products={products} AgregarACarrito={props.AgregarACarrito}></ListadoProductos>
)}

export const ListadoExtras = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

useEffect(()=>{
        fetch('http://localhost:4000/extras')
        .then(res => res.json())
        .then (res => {
        setLoading(false);
        setProducts(res)})},[]) 
return (
    <ListadoProductos products={products} AgregarACarrito={props.AgregarACarrito}></ListadoProductos>
)}