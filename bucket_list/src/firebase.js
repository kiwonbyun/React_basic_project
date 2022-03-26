// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARmj_yE3XdKSCcg-Trf9pUYLkVOXBwoa0",
  authDomain: "sparta-react-basic-975fe.firebaseapp.com",
  projectId: "sparta-react-basic-975fe",
  storageBucket: "sparta-react-basic-975fe.appspot.com",
  messagingSenderId: "47157098212",
  appId: "1:47157098212:web:554c9385ea4ae1fdffdef1",
  measurementId: "G-27BJ74ERZ7",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
