import React, { useState, useEffect } from "react";

export default function ItemCount({ producto, onAdd }) {
    return (
        <>
            <button onClick={() => onAdd(3)}>Agregar al carro</button>
        </>
    );
}