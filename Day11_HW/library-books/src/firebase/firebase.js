// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBygNqRJ3bJspWBJf0YtPbw0xsETwz_fhM",
  authDomain: "library-books-81a60.firebaseapp.com",
  projectId: "library-books-81a60",
  storageBucket: "library-books-81a60.appspot.com",
  messagingSenderId: "259206198283",
  appId: "1:259206198283:web:fb6413dacfa17fcfa9830e"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };