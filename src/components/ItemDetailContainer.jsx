
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {

  const { itemId } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(()=>{
      setTimeout(()=>{

          let listadoDeProductos = [{id: '001', nombre: 'zapato nike I', categoria: 'nike'}, {id: '002', nombre: 'zapato nike rapido', categoria: 'nike'}, {id: '003', nombre: 'zpt adidas new york', categoria: 'adidas'}  ];

          listadoDeProductos = listadoDeProductos.filter(item => item.id == itemId);

          let myProducto = listadoDeProductos[0];

          setProducto(myProducto);

      }, 2000)
  }, [itemId])

  return (
    <>
    {itemId}
      <ItemDetail producto={producto}/>
      <Link to={"/item/003"}>ir al item 3</Link>

    </>
  );
}