import React, { useState, useEffect } from "react";

import { getFirestore } from '../firebase/firebase'

export default function TestReadItemFirebase() {

  const [item, setItem] = useState({});

  
  const miOrden = {
    buyer: { name: 'guille', phone: '09984748487', email: 'pepe@gmail.com' },
    items: [{ id: 'NmfjHI8fX3uXiyjkH0HV', title: "zapato adidas", price: 500, count: 2 }, { id: 'hiIEZjk2VrbAti7v9ACv', title: "zapato nike", price: 500, count: 1 }],
    total: 1500
  }


  useEffect(() => {

    const db = getFirestore();
    const itemCollection = db.collection("items");
    //PONER ACA EL ID DE SU DOCUMENTO
    const miItem = itemCollection.doc('NmfjHI8fX3uXiyjkH0HV');

    miItem.get()
      .then((doc) => {

        if (!doc.exists) {
          console.log('no existe ese documento');
          return
        }

        console.log('item found');
        setItem({ id: doc.id, ...doc.data() });

      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  return (
    <>
      {JSON.stringify(item)}
    </>
  );
}