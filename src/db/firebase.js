// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMZndviNMOKIUUr2K9xpcGpWJ1CD_4-CE",
    authDomain: "crud-frutas-buenas-practicas.firebaseapp.com",
    projectId: "crud-frutas-buenas-practicas",
    storageBucket: "crud-frutas-buenas-practicas.appspot.com",
    messagingSenderId: "752421365000",
    appId: "1:752421365000:web:c72a48011b9c7a413db8bd",
    measurementId: "G-J5B69G8GS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

