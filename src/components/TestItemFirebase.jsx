import React, { useState, useEffect } from "react";
import { getFirestore } from '../firebase/firebase'

export default function TestItemFirebase() {
  const [item, setItem] = useState({});
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
      .catch((err)=>{
        console.log(err);
      })
  }, [])
  return (
    <>
      {JSON.stringify(item)}
    </>
  );
}