import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCtok4f8235K9w9a5vuxmyHrDIy4PRnp9k",

  authDomain: "react-app-cursos-c0d45.firebaseapp.com",

  projectId: "react-app-cursos-c0d45",

  storageBucket: "react-app-cursos-c0d45.appspot.com",

  messagingSenderId: "351597367706",

  appId: "1:351597367706:web:1e0b629d3625b7f08aaa23",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDb = getFirestore(FirebaseApp);
