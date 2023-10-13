// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHy53uWT1i53nk55mD0tRCs8Rj7HkdRAM",
  authDomain: "economarket-ffd74.firebaseapp.com",
  projectId: "economarket-ffd74",
  storageBucket: "economarket-ffd74.appspot.com",
  messagingSenderId: "102245030080",
  appId: "1:102245030080:web:fa4a4646e36fb1ca0ef525",
  measurementId: "G-R4JF2PVZC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const analytics = getAnalytics(app);