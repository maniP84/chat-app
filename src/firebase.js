import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyAmLIXOHKeUso1dvbYZjTM_Ewo8JzgsYIo",
    authDomain: "mam-73b1e.firebaseapp.com",
    projectId: "mam-73b1e",
    storageBucket: "mam-73b1e.appspot.com",
    messagingSenderId: "1006791799411",
    appId: "1:1006791799411:web:08b66a1d2683d15d003006"
}).auth();
