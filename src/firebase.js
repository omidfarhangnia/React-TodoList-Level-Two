// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvJHF8C3Eahjul-BhKBD-7JugM1D4Y1XA",
  authDomain: "todo-app-level-two.firebaseapp.com",
  projectId: "todo-app-level-two",
  storageBucket: "todo-app-level-two.appspot.com",
  messagingSenderId: "179639694146",
  appId: "1:179639694146:web:c564535b954ec1ee84cedb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);