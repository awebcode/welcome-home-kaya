// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDS434wKnOtgdp7BI9_yz0gMY_4tJLd1z8",
  authDomain: "welcomehomes-11eb3.firebaseapp.com",
  projectId: "welcomehomes-11eb3",
  storageBucket: "welcomehomes-11eb3.appspot.com",
  messagingSenderId: "1073126910965",
  appId: "1:1073126910965:web:ca4bf0f2281b6938c3cebc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
