import firebase from "firebase";

const firebaseApp= firebase.initializeApp(
   {
        apiKey: "AIzaSyCBN2-zSaf23JYzLOsf1VP1Od4ywGxuhRE",
        authDomain: "facebook-messenger-clone-2a08f.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-2a08f.firebaseio.com",
        projectId: "facebook-messenger-clone-2a08f",
        storageBucket: "facebook-messenger-clone-2a08f.appspot.com",
        messagingSenderId: "336995720058",
        appId: "1:336995720058:web:f6e4cf753b5649312e54c3",
        measurementId: "G-6R3R7D6RL5"
      }
);

const db= firebaseApp.firestore();

export default db;