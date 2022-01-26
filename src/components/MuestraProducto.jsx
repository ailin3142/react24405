import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

export default function MuestraProducto({producto}) {

    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    function onAdd(cantidad) {
        alert('agregar ' + cantidad);
        setMostrarItemCount(false);
    }

  return (
    <>
        <div>{producto.id + " " + producto.nombre + ' ' + producto.stock}</div>
        {
            (mostrarItemCount)?
                <ItemCount producto={producto} onAdd={onAdd} />
            :
            <button>Ve a terminar tu compra</button>
        }        
    </>
  );
}