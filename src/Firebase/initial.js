// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use




const firebaseConfig = {
  apiKey: "AIzaSyD_whQf2Oh_E-MdwtFsDDW94GG4ruK09z0",
  authDomain: "bac-info-2022.firebaseapp.com",
  projectId: "bac-info-2022",
  storageBucket: "bac-info-2022.appspot.com",
  messagingSenderId: "600387437241",
  appId: "1:600387437241:web:35e639a69ce4a8dae81168",
  measurementId: "G-Z96MH8C026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);