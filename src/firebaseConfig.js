// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJNZQjewLzvPcCAyAWamKrQ7YyEKEu8fw",
  authDomain: "ecommerce-dolcejulieta.firebaseapp.com",
  projectId: "ecommerce-dolcejulieta",
  storageBucket: "ecommerce-dolcejulieta.appspot.com",
  messagingSenderId: "9430302929",
  appId: "1:9430302929:web:94dc34474f436a6ab4c5f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db