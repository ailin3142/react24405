import React, { useState, useEffect } from "react";
import MuestraProducto from "./MuestraProducto";

export default function ContenedorProducto() {

  const [producto, setProducto] = useState({});

  useEffect(()=>{
    setProducto({id: 0 , nombre: 'nike', stock:10});
  }, [])

  return (
    <>
      <MuestraProducto producto={producto} />
    </>
  );
}