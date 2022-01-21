import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


export default function Nav() {

  return (
    <>
    <div style={{backgroundColor: '#eeeeee'}}>
        <Link to={'/'}>Inicio </Link>
        <Link to={'/carrito'}>Carrito </Link>
        <Link to={'/contacto'}>Contacto </Link>
    </div>
    </>
  );
}

