import React, { useState, useEffect } from "react";
import { getFirestore } from '../firebase/firebase'

export default function TestCollectionFirebase() {
  const [items, setItems] = useState({});
  useEffect(() => {

    const db = getFirestore();

    const itemCollection = db.collection("items")
    //.where('category', '==', 'adidas');

    itemCollection.get()
      .then((querySnapShot) => {

        if (querySnapShot.size == 0) {
          console.log('no hay documentos con en ese query');
          return
        }

        console.log('hay documentos');

        //console.log(querySnapShot.docs);

        setItems(querySnapShot.docs.map((doc)=> {
            return { id: doc.id, ...doc.data() }
        }
        ));
        
      })
      .catch((err)=>{
        console.log(err);
      })
  }, [])
  return (
    <>
      {JSON.stringify(items)}
    </>
  );
}