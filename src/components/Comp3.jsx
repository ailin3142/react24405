import React, { useState, useEffect, useContext } from "react";
import { contexto } from "./ContextDemo"

export default function Comp3() {

    const { carrito } = useContext(contexto);

    return (
        <>
            <div style={{ border: '2px solid #ff0000', margin: '5px' }}>
                {
                    carrito.map(item => <div>{item}</div>)
                }
            </div>

        </>
    )
}