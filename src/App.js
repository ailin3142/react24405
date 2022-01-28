import './App.css';
import React, { useState, useEffect } from "react";
import Comp1 from './components/Comp1';
import ContextDemo from './components/ContextDemo';


export default function App() {
    return (
    <>
      <ContextDemo>

        <Comp1 />
        
      </ContextDemo>




    </>
  );
}