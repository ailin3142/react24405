
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from "./ItemList";


export default function ItemListContainer() {

    const [listadoDeProductos, setListadoDeProductos] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            setListadoDeProductos([{id: '001', nombre: 'zapato nike I', categoria: 'nike'}, {id: '002', nombre: 'zapato nike rapido', categoria: 'nike'}, {id: '003', nombre: 'zpt adidas new york', categoria: 'adidas'}  ]);
        }, 2000)
    }, [])

  return (
    <>
        <ItemList listadoDeProductos={listadoDeProductos}/>
    </>
  );
}
