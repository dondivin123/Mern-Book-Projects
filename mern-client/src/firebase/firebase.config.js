// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYmid9JWhF9LxR9rEtyI3LO2NcpTerkwY",
  authDomain: "mern-book-inventory-1e9cb.firebaseapp.com",
  projectId: "mern-book-inventory-1e9cb",
  storageBucket: "mern-book-inventory-1e9cb.firebasestorage.app",
  messagingSenderId: "178354808781",
  appId: "1:178354808781:web:a919550d8946363b730684"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;