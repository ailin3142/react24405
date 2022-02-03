import React, { useState, useEffect } from "react";

export default React.memo( function Hijo() {

  
  useEffect(()=>{
    console.log('HIJO RENDER')
  })
  
  return (
    <>
    <div style={{margin: '50px', border: '2px solid black'}}>
    Soy el hijo
    </div>
   
    </>
  );

})