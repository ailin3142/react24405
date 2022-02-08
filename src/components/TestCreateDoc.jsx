import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { getFirestore } from '../firebase/firebase'

export default function TestCreateDoc() {

    const [orderId, setOrderId] = useState('');

    useEffect(() => {

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: { name: 'guille', phone: '09984748487', email: 'pepe@gmail.com' },
            items: [{ id: 'NmfjHI8fX3uXiyjkH0HV', title: "zapato adidas", price: 500, count: 2 }, { id: 'hiIEZjk2VrbAti7v9ACv', title: "zapato nike", price: 500, count: 1 }],
            total: 1500,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });


    }, [])


    return (
        <>
            {/* {JSON.stringify(item)} */}
            {(orderId) ?
                <h1>Felicitaciones tu order es {orderId}</h1>
                :
                <h1>Loading...</h1>
            }
        </>
    );
}