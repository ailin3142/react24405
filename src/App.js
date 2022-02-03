import React, { useState, useEffect } from "react";
import Hijo from "./components/Hijo";

export default function App() {

  const [estado, setEstado] = useState(0);

  useEffect(()=>{
    console.log('PADRE RENDER ' + estado )
  })
  
  return (
    <>
      NUESTRA APP

      <button onClick={()=>setEstado(Math.random())}>Cambiar el estado</button>
      
      <Hijo />
  
    </>
  );

}