import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCMMu1j1KlgAtk8RnEPCSa3vwYRS2qc2ic",
    authDomain: "camada-24405.firebaseapp.com",
    projectId: "camada-24405",
    storageBucket: "camada-24405.appspot.com",
    messagingSenderId: "184949245066",
    appId: "1:184949245066:web:f0fcced27790c4ebb65973"
  });

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}