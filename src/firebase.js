// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnl5gK50ByxVkLtaLyV_WysuxYq6U0TPs",
  authDomain: "todo-app-lv2.firebaseapp.com",
  projectId: "todo-app-lv2",
  storageBucket: "todo-app-lv2.appspot.com",
  messagingSenderId: "122392256025",
  appId: "1:122392256025:web:04378939ba09e06eb95488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);