// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj_nOImZv5L932r1Faq_cg-wMQVoKqv-Q",
  authDomain: "recommendo-b1c90.firebaseapp.com",
  projectId: "recommendo-b1c90",
  storageBucket: "recommendo-b1c90.firebasestorage.app",
  messagingSenderId: "555708774599",
  appId: "1:555708774599:web:526320767346a7833166e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth