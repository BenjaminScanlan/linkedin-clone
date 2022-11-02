// Sonny's version
// import firebase from "./firebase";

// ?The following is my work around, is it right? this is version 9 style of import
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// tertieary method where v9 apparently works with v8
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7JM6hPh9opSlYWZhsk7UifGEtp0XRzCw",
  authDomain: "linkedin-clone-44ffd.firebaseapp.com",
  projectId: "linkedin-clone-44ffd",
  storageBucket: "linkedin-clone-44ffd.appspot.com",
  messagingSenderId: "745128914000",
  appId: "1:745128914000:web:62c22b2644ef7131707555",
};

// ?my version is it right??
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);

// Sonny's version
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
