// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkVFi65Vn--4HTfEIREmlXc0wyDnBzqnw",
    authDomain: "web-2-1d529.firebaseapp.com",
    projectId: "web-2-1d529",
    storageBucket: "web-2-1d529.appspot.com",
    messagingSenderId: "554175289775",
    appId: "1:554175289775:web:309b0f3a99245e5ee8775a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

