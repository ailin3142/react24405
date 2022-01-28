import React, { useState, useEffect } from "react";
import Comp2 from "./Comp2";


export default function Comp1() {

    return (
        <>
            <div style={{ border: '1px solid #000000', margin: '5px' }}>
                <Comp2 />
            </div>

        </>
    );
}