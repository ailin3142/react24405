import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Fo from './components/Fo';
import Categoria from './components/Categoria';


function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>

          {/* ruta home */}
          <Route exact path="/">
            Soy la home
          </Route>

          {/* ruta dinamica para categoria */}
          <Route path="/categoria/:categoriaId">
            <Categoria />
          </Route>

          {/* ruta contacto */}
          <Route exact path="/contacto">
            Estas en contacto
          </Route>

          {/* ruta carrito */}
          <Route exact path="/carrito">
            listo para comprar
          </Route>

        </Switch>
        <Fo />
      </BrowserRouter>

    </>
  );
}

export default App;