// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4wuhxqoRL4QwKQxuGBTcLSH8kx-cBs7c",
  authDomain: "bookstore-bdc1e.firebaseapp.com",
  projectId: "bookstore-bdc1e",
  storageBucket: "bookstore-bdc1e.appspot.com",
  messagingSenderId: "229010810968",
  appId: "1:229010810968:web:79cfaca7c49771a5ff822d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;