import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';


export default function Categoria() {

    const { categoriaId } = useParams();

    const [arrayDeProdutcos, setArrayDeProdutcos] = useState([]);

    useEffect(()=>{

        const productos = [{name: 'zapato deportivo', categoria: 'nike'},{name: 'campera adidas', categoria: 'adidas'},{name: 'tenis', categoria: 'nike'},{name: 'pelota', categoria: 'adidas'}];

        /* new Promise
        .then(ACA CARGAN EL MOCK DE PRODUCTOS [{name: 'zapato deportivo', categoria: 'nike'},{name: 'campera adidas', categoria: 'adidas'},{name: 'tenis', categoria: 'nike'},{name: 'pelota', categoria: 'adidas'}]) */

        setArrayDeProdutcos(productos.filter(item=> item.categoria == categoriaId));

    }, [categoriaId])


  return (
    <>
        <Link to={"/categoria/nike"} >Nike</Link><Link to={"/categoria/adidas"} >Adidas</Link><Link to={"/categoria/chanel"} >Chanel</Link>
        Estoy en la categoria {categoriaId}
        {
            arrayDeProdutcos.map(item => <div>{item.name}</div>)
        }
    
    </>
  );
}
