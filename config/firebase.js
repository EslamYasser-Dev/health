// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBonLm4twi6uG5ZgOhZZdhaxHpvKbjECQ8",
  authDomain: "front-end-53113.firebaseapp.com",
  projectId: "front-end-53113",
  storageBucket: "front-end-53113.appspot.com",
  messagingSenderId: "607111999711",
  appId: "1:607111999711:web:b3cf55f5dcaf80ba2d396a",
  measurementId: "G-W4F2QE81S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);