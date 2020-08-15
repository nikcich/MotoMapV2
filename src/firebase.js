import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBgCQivLOVmUuKhnjNVU8bMMxbG_85FoIA",
    authDomain: "meetup-v2.firebaseapp.com",
    databaseURL: "https://meetup-v2.firebaseio.com",
    projectId: "meetup-v2",
    storageBucket: "meetup-v2.appspot.com",
    messagingSenderId: "204269353570",
    appId: "1:204269353570:web:e80e739691776f8b0daf3b",
    measurementId: "G-S4NKHKVSSM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;