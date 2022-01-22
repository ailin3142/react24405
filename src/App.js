import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>NAVBAR</div>
        <Switch>

          {/* ruta home */}
          <Route exact path="/">
            <ItemListContainer />
          </Route>


          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>

          {/* ////RUTA CATEGORIAS */}
          {/* <Route path="/categoria/:categoriaId">
            <itemListContainer />
          </Route> */}


        </Switch>
        <div>FOOTER</div>
      </BrowserRouter>

    </>
  );
}

export default App;