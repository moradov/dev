import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDrsKqWe_wN7li6Mcg97Uh-vzBBuoZQr-Q",
  authDomain: "my-portfolio-a915d.firebaseapp.com",
  projectId: "my-portfolio-a915d",
  storageBucket: "my-portfolio-a915d.appspot.com",
  messagingSenderId: "529774566963",
  appId: "1:529774566963:web:ff5baaa9869e973b168d46",
  measurementId: "G-KPG9CYF6DC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
