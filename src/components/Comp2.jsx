import React, { useState, useEffect, useContext } from "react";
import Comp3 from "./Comp3";
import { contexto } from "./ContextDemo"

export default function Comp2() {

    const { alertEspacial } = useContext(contexto);

    return (
        <>
            <div style={{ border: '1px solid #000000', margin: '5px' }}>
                <Comp3 />
            </div>
            <button onClick={()=>alertEspacial()}>hacer el alert que no es mio es del componet contexto</button>

        </>
    );
}