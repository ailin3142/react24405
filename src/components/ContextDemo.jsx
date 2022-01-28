import React, { useState, useEffect, createContext } from "react";

export const contexto = createContext();

export default function ContextDemo({ children }) {

    const [carrito, setCarrito] = useState(['2 nike', '3 didas', '4 pochoclos']);

    function alertEspacial(){
        alert('un alert desde marte!');
    }

    /* function addItem(){
        //carrito + item => setCarrito(acava)
    }

    function removeItem(){
        //carrito filtro => setCarrito(acava)
    }

    function isInCart(id){

    } */

    return (
        <>
            <contexto.Provider value={{alertEspacial, carrito, setCarrito}}>
                {children}
            </contexto.Provider> 

        </>
    );
}