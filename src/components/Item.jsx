import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function Item({ producto }) {

    return (
        <>
            <div>
                {producto.id + " " + producto.nombre + " " + producto.categoria}
            </div>
        </>
    );
}