import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { getFirestore } from '../firebase/firebase'

export default function TesUpdateDoc() {

    useEffect(() => {

        const db = getFirestore();
        const docRef = db.collection("items").doc("NmfjHI8fX3uXiyjkH0HV");

        docRef.update({stock:500})
            .then(() => {
                console.log('cambio el stock!');
            })
            .catch((err) => {
                console.log(err);
            });


    }, [])


    return (
        <>
        </>
    );
}