import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Item from "./Item";


export default function ItemList({ listadoDeProductos }) {

  return (
    <>
      {
        listadoDeProductos.map(producto => <Item  producto={producto}/>)
      }
    </>
  );
}