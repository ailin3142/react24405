import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <div>NAVBAR</div>
        <Switch>

          {/* ruta home */}
          <Route exact path="/">
            
          </Route>


        </Switch>
        <div>FOOTER</div>
      </BrowserRouter>

    </>
  );
}

export default App;